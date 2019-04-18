function CustomAlert(name, date, options) {
    this.name = name
    this.date = date
    this.inner_id = 'customAlert-inner-' + name
    this.wrapper_id = 'customAlert-wrapper-' + name
    this.confirm = options.confirm
    
      let wrapper = document.createElement('div')
      wrapper.className='customAlert-wrapper'
      wrapper.id = this.wrapper_id
      let inner = document.createElement('div')
      inner.id = this.inner_id
      inner.className='customAlert'
      let content = document.createElement('div')
      let h1 = document.createElement('h1')
      let h5 = document.createElement('h5')
      h1.innerHTML = this.name
      h5.innerHTML = this.date
      content.appendChild(h1)
      content.appendChild(h5)
      inner.appendChild(content)
      wrapper.appendChild(inner)
      let buttons = document.createElement('div')
      let btn1 = document.createElement('button')
      let btn2 = document.createElement('button')
      buttons.id = 'buttons'
      buttons.appendChild(btn1)
      buttons.appendChild(btn2)
      inner.appendChild(buttons)
      btn1.innerHTML = 'Cancel'
      btn1.className= 'red'
      btn2.innerHTML = 'Continue'
      if(options.confirm) {
        btn2.onclick = options.confirm 
      }
      // btn1.onclick = function() {
      //   wrapper.remove()
      // }
      btn1.onclick = options.cancel
      let timeline = anime.timeline({
        
         
         begin: function() {
           console.log('began')
           if(timeline.completed) {
             console.log('hi')
           }
         }
       })
    timeline.add({
        targets: wrapper,
        opacity: [0, 1],
        easing: 'easeInOutQuint',
        duration: 300,
      })
      .add({
        targets: inner,
        scale: [.8, 1],
        // translateY: [50, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 500,
        offset: '-=100'
      })
    .add({
      targets: h1,
      opacity: [0,1],
      easing: 'easeInOutQuint',
      offset: '-=450',
      duration: 400,
      scale: [1.4, 1],
    })
    .add({
      targets: h5,
      opacity: [0,1],
      translateY: [-10, 0],
      easing: 'easeOutExpo',
      offset: '+=150',
      duration: 400,
    })
    //   .add({ 
    //     targets: buttons.children,
    //     opacity: [0 ,1],
    //   // translateY: [50, 0],
    //   scale: [.5, 1],
    //   easing: 'linear',
    //   duration: 400,
    //   delay: function(el,i,l) {
    //     return i * 100
    //   },
    //   offset: '+=150'
        
    // })
     
    timeline.play()
    document.body.appendChild(wrapper)
      // inner.addEventListener('click', function() {
      //   this.removeAlert(event)
      // }.bind(this))
      
     
    
    
    this.animateIn = function() {
      
    }
    this.continuing = function(callback) {
      let element = document.getElementById(this.inner_id)
      element.children[1].children[1].classList.add('disabled')
      element.children[1].children[1].innerHTML = 'Continuing...'
      setTimeout(function() {
        callback()
      }, 1000)

    }
    this.removeAlert = function(callback) {
      anime({
        targets: '.customAlert-wrapper',
        opacity: [1,0],
        easing: 'easeInOutQuint',
        duration: 300,
        complete: function() {
          document.querySelector('.customAlert-wrapper').remove()
          if(options.afterExitAnimation()) {
            options.afterExitAnimation()
            return callback()
          }
          return callback()
        }
      })
      timeline.reverse()
      timeline.play()
  
    }
  }
  
  let iamGosu = function(phrase) {
    console.log(phrase)
  }
  function handleClick() {
    let customAlert = new CustomAlert('Hold up..', 'do u know what you are doing?', 
      {
        confirm: function() {
          iamGosu('user continued')
          customAlert.continuing(function() {
            customAlert.removeAlert(function() {
              console.log('alert removed.')
              let newAlert = new CustomAlert('IM BACK', 'bitches!', {
                confirm: function() {
                  customAlert.removeAlert(function() {
                    
                  })
                },
                cancel: function() {
                  customAlert.removeAlert(function() {
                    
                  })
                }
              })
            })
          })
          
        },
        cancel: function() {
          iamGosu('user has canceled')
          customAlert.removeAlert(function() {
            
          })
        },
        continuing: function() {

        },
        afterExitAnimation() {
          console.log('animation finished')
          // let newAlert = new CustomAlert('hey again', 'sdfdf')
        }
      }
    )
  // werr.activateAlert()
  
  }