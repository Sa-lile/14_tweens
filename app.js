const img1 = document.querySelector('.container-images img:nth-child(1)')
const btnCat = document.querySelector('.cat-fade')

// gsap.to('.container-images img', {y: 300, scale: 1.2, duration: 2, ease: "power1", stagger: {
//   each: 0.5,
//   from: "center"
  
// }})

// gsap.to('.container-images img', {y: 300, scale: 1.2, duration: 2, ease: "power1", stagger: function(index){
//   console.log(index);
  
// }})

// gsap.to('.btn', {duration: 0.2, x: "random(-100,100)", stagger: 0.1})

// gsap.to('.btn', {duration: 0.2, x: "random([50,30,-30,80])", stagger: 0.1})

const complete = () => console.log("Terminée")


gsap.registerEffect({
    name: "imgCrazy",
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, y: 200, scale:1.4, rotation: 360})
    },
    defaults: {duration: 2}
})

gsap.effects.imgCrazy(img1, {duraiton: 5})
gsap.effects.imgCrazy('.container-images img:nth-child(2)')
