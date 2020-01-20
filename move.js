function move (obj,name,tgt) {
				clearInterval(obj.timer)
				obj.timer = setInterval(function () {
					if (parseInt(getComputedStyle(obj)[name]) == tgt) {
						clearInterval(obj.timer)
					} else{
						let speed = (tgt - parseInt(getComputedStyle(obj)[name])) / 10
						obj.style[name] = parseInt(getComputedStyle(obj)[name]) + speed + 'px'
					}
				},30)
			}