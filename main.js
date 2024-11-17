import "./styles/style.css"
import * as THREE from "three"

const ratio = 1.61803399

const cameraViewSize = 5
const cameraDistance = 10
const cameraAngleY = 45
const cameraAngleX = 45

const sunAngleY = 45
const sunAngleX = 45
const sunIntensity = 1.75
const ambientIntensity = 0

let materialHue = 0
const materialSaturation = 1
const materialLuminance = 0.5
const materialHueShift = 30

let initialCubeCount = 8

class CubeSpiral {
  constructor () {
    this.loadAssets().then(() => {
      this.initScene()
      this.initCamera()
      this.initRenderer()
      this.initLights()
      this.initWorldPivot()
      this.addInitialCubes(initialCubeCount)
      this.addEventListeners()
      this.animate()
    })
  }

  async loadAssets () {
    const textureLoader = new THREE.TextureLoader()
    this.gridTexture = await new Promise(resolve => {
      textureLoader.load('assets/Grid.png', resolve)
    })
    this.gridTexture.wrapS = THREE.RepeatWrapping
    this.gridTexture.wrapT = THREE.RepeatWrapping

    const audioLoader = new THREE.AudioLoader()
    this.clickSound = await new Promise(resolve => {
      audioLoader.load('assets/SFX_Click.mp3', buffer => {
        const sound = new THREE.Audio(new THREE.AudioListener())
        sound.setBuffer(buffer)
        resolve(sound)
      })
    })
  }

  initScene () {
    this.scene = new THREE.Scene()
    this.clock = new THREE.Clock()
    this.cubes = []
    this.currentScale = 1
    this.currentLocalCenter = new THREE.Vector3(0, 0, 0)
    this.currentRotation = new THREE.Quaternion()
    this.currentRotation.setFromEuler(new THREE.Euler(0, 0, 0))
  }

  initWorldPivot () {
    this.worldPivot = new THREE.Group()
    this.scene.add(this.worldPivot)
  }

  initCamera () {
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    const aspect = this.sizes.width / this.sizes.height
    const viewSize = cameraViewSize

    this.camera = new THREE.OrthographicCamera(
      -viewSize * aspect / 2,
      viewSize * aspect / 2,
      viewSize / 2,
      -viewSize / 2,
      0,
      1000
    )

    const radianAngleY = THREE.MathUtils.degToRad(cameraAngleY)
    const radianAngleX = THREE.MathUtils.degToRad(cameraAngleX)
    const distance = cameraDistance

    this.camera.position.set(
      distance * Math.sin(radianAngleY) * Math.cos(radianAngleX),
      distance * Math.sin(radianAngleX),
      distance * Math.cos(radianAngleY) * Math.cos(radianAngleX)
    )
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    this.scene.add(this.camera)
  }

  initRenderer () {
    this.canvas = document.querySelector("canvas.webgl")
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
    })
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  initLights () {
    const ambientLight = new THREE.AmbientLight(0xffffff, ambientIntensity)
    const directionalLight = new THREE.DirectionalLight(0xffffff, sunIntensity)

    const radianSunAngleY = THREE.MathUtils.degToRad(sunAngleY)
    const radianSunAngleX = THREE.MathUtils.degToRad(sunAngleX)

    directionalLight.position.set(
      Math.sin(radianSunAngleY) * Math.cos(radianSunAngleX),
      Math.sin(radianSunAngleX),
      Math.cos(radianSunAngleY) * Math.cos(radianSunAngleX)
    ).normalize()

    this.scene.add(ambientLight, directionalLight)
  }

  addInitialCubes (count) {
    for (let i = 0; i < count; i++) {
      this.instantiateCube()
    }
  }

  scaleWorldPivot () {
    this.worldPivot.scale.multiplyScalar(ratio)
    const lastCube = this.cubes[this.cubes.length - 1]
    this.setCameraTarget(lastCube)
  }

  playClickSound () {
    if (this.clickSound.isPlaying) {
      this.clickSound.stop()
    }
    this.clickSound.play()
  }

  instantiateCube () {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color().setHSL(
        (materialHue + materialHueShift) % 360 / 360,
        materialSaturation,
        materialLuminance
      ),
      metalness: 0,
      roughness: 1,
      map: this.gridTexture,
    })

    const cube = new THREE.Mesh(geometry, material)

    cube.scale.set(this.currentScale, this.currentScale, this.currentScale)
    cube.position.copy(this.currentLocalCenter)
    cube.quaternion.copy(this.currentRotation)

    this.worldPivot.add(cube)
    this.cubes.push(cube)

    const nextScale = this.currentScale / ratio
    const offset = new THREE.Vector3(
      -this.currentScale / 2 - nextScale / 2,
      this.currentScale / 2 - nextScale / 2,
      this.currentScale / 2 - nextScale / 2
    )

    offset.applyQuaternion(this.currentRotation)
    this.currentLocalCenter.add(offset)
    this.currentRotation.multiply(
      new THREE.Quaternion().setFromEuler(new THREE.Euler(0, -Math.PI / 2, 0))
    )
    this.currentScale = nextScale

    this.scaleWorldPivot()

    materialHue = (materialHue + materialHueShift) % 360

    console.log(this.cubes.length)
    if (this.cubes.length >= (360 / materialHueShift) + initialCubeCount) {
      this.resetSpiral()
    }
  }

  resetSpiral () {
    console.log("Resetting spiral...")

    this.worldPivot.scale.set(1, 1, 1)
    this.cubes.forEach(cube => {
      this.worldPivot.remove(cube)
    })
    this.cubes = []

    this.currentScale = 1
    this.currentLocalCenter.set(0, 0, 0)
    this.currentRotation.setFromEuler(new THREE.Euler(0, 0, 0))

    materialHue = 0

    this.addInitialCubes(initialCubeCount)
  }

  setCameraTarget (cube) {
    const worldPosition = new THREE.Vector3()
    cube.getWorldPosition(worldPosition)

    const distance = cameraDistance
    const radianAngleY = THREE.MathUtils.degToRad(cameraAngleY)
    const radianAngleX = THREE.MathUtils.degToRad(cameraAngleX)

    this.camera.position.set(
      worldPosition.x + distance * Math.sin(radianAngleY) * Math.cos(radianAngleX),
      worldPosition.y + distance * Math.sin(radianAngleX),
      worldPosition.z + distance * Math.cos(radianAngleY) * Math.cos(radianAngleX)
    )
    this.camera.lookAt(worldPosition)

    const worldScale = this.worldPivot.scale.x
    const baseSize = cameraViewSize * this.currentScale * worldScale

    this.camera.left = -baseSize * (this.sizes.width / this.sizes.height)
    this.camera.right = baseSize * (this.sizes.width / this.sizes.height)
    this.camera.top = baseSize
    this.camera.bottom = -baseSize
    this.camera.updateProjectionMatrix()
  }

  addEventListeners () {
    window.addEventListener("resize", () => this.onResize())
    window.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        this.playClickSound()
        this.instantiateCube()
      }
    })
  }

  onResize () {
    this.sizes.width = window.innerWidth
    this.sizes.height = window.innerHeight

    const aspect = this.sizes.width / this.sizes.height
    const worldScale = this.worldPivot.scale.x
    const baseSize = cameraViewSize * this.currentScale * worldScale

    this.camera.left = -baseSize * aspect
    this.camera.right = baseSize * aspect
    this.camera.top = baseSize
    this.camera.bottom = -baseSize
    this.camera.updateProjectionMatrix()

    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  animate () {
    this.renderer.render(this.scene, this.camera)
    window.requestAnimationFrame(() => this.animate())
  }
}

new CubeSpiral()