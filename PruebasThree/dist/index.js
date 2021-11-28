import * as THEREE from 'https://unpkg.com/three@0.127/build/three.module.js'

const canvas = document.querySelector('.webgl')

const scene = new THEREE.Scene()

const geometry = new THEREE.BoxGeometry(1,1,1)

const material = new THEREE.MeshBasicMaterial({
    color:0x00ff00
})
const mesh = new THEREE.Mesh(geometry,material)
scene.add(mesh)

// Boilerplate code

const sizes = {
    width: window.innerWidth,
    height:window.innerHeight
}
const camera = new THEREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,100)
camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THEREE.WebGL1Renderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enable = true

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()