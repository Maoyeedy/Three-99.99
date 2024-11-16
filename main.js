import "./styles/style.css"
import * as THREE from "three"

const Config = {
  ratio: 1.61803399,
  initialCubeCount: 8,
  cameraViewSize: 10,
  cameraDistance: 10,
  cameraAngleY: 45,
  cameraAngleX: 45,
}

class CubeSpiral {
  constructor () {
    this.initScene()
    this.initCamera()
    this.initRenderer()
    this.initLights()
    this.initMaterials()
    this.addInitialCubes(Config.initialCubeCount)
    this.addEventListeners()
    this.animate()
  }

  initScene () {
    this.scene = new THREE.Scene()
    this.clock = new THREE.Clock()
    this.cubes = []
    this.currentScale = 1
    this.currentCenter = new THREE.Vector3(0, 0, 0)
    this.currentRotation = new THREE.Quaternion()
    this.currentRotation.setFromEuler(new THREE.Euler(0, 0, 0))
  }

  initCamera () {
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    const aspect = this.sizes.width / this.sizes.height
    const viewSize = Config.cameraViewSize

    this.camera = new THREE.OrthographicCamera(
      -viewSize * aspect / 2,  // left
      viewSize * aspect / 2,   // right
      viewSize / 2,            // top
      -viewSize / 2,           // bottom
      0.01,                     // near
      100                      // far
    )

    // Apply isometric position and rotation
    const radianAngle = THREE.MathUtils.degToRad(Config.cameraAngleY)
    const distance = Config.cameraDistance
    this.camera.position.set(
      distance * Math.sin(radianAngle),
      distance * Math.sin(radianAngle),
      distance * Math.cos(radianAngle)
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
    const ambientLight = new THREE.AmbientLight(0x404040)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(3, 5, 5)
    this.scene.add(ambientLight, directionalLight)
  }

  initMaterials () {
    this.materials = [
      new THREE.MeshStandardMaterial({ color: "#ff0000" }),
      new THREE.MeshStandardMaterial({ color: "#00ff00" }),
      new THREE.MeshStandardMaterial({ color: "#0000ff" }),
    ]
  }

  addInitialCubes (count) {
    for (let i = 0; i < count; i++) {
      this.instantiateCube()
    }
  }

  instantiateCube () {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material =
      this.materials[this.cubes.length % this.materials.length]
    const cube = new THREE.Mesh(geometry, material)

    cube.scale.set(
      this.currentScale,
      this.currentScale,
      this.currentScale
    )
    cube.position.copy(this.currentCenter)

    this.scene.add(cube)
    this.cubes.push(cube)

    // Update for next cube
    const nextScale = this.currentScale / Config.ratio
    const offset = new THREE.Vector3(
      -this.currentScale / 2 - nextScale / 2,
      this.currentScale / 2 - nextScale / 2,
      this.currentScale / 2 - nextScale / 2
    )

    offset.applyQuaternion(this.currentRotation)
    this.currentCenter.add(offset)
    this.currentRotation.multiply(
      new THREE.Quaternion().setFromEuler(new THREE.Euler(0, -Math.PI / 2, 0))
    )
    this.currentScale = nextScale

    // Focus camera on the latest cube
    this.setCameraTarget(cube)

    // Adjust orthographic size
    this.camera.top /= Config.ratio
    this.camera.bottom /= Config.ratio
    this.camera.left /= Config.ratio
    this.camera.right /= Config.ratio
    this.camera.updateProjectionMatrix()
  }

  setCameraTarget (cube) {
    const distance = Config.cameraDistance
    const radianAngle = THREE.MathUtils.degToRad(Config.cameraAngleY)

    // Maintain rotation while adjusting distance
    this.camera.position.set(
      cube.position.x + distance * Math.sin(radianAngle),
      cube.position.y + distance * Math.sin(radianAngle),
      cube.position.z + distance * Math.cos(radianAngle)
    )
    this.camera.lookAt(cube.position)
  }

  addEventListeners () {
    window.addEventListener("resize", () => this.onResize())
    window.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        this.instantiateCube()
      }
    })
  }

  onResize () {
    this.sizes.width = window.innerWidth
    this.sizes.height = window.innerHeight

    this.camera.aspect = this.sizes.width / this.sizes.height
    this.camera.updateProjectionMatrix()

    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  animate () {
    this.renderer.render(this.scene, this.camera)
    window.requestAnimationFrame(() => this.animate())
  }
}

// Initialize the spiral
new CubeSpiral()
