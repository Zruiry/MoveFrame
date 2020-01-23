function move(obj, name, tgt, fn) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function() {
		let speed = (tgt - parseInt(getComputedStyle(obj)[name])) / 10
		if (speed > 0) {
			speed = Math.ceil(speed)
		}
		if (speed < 0) {
			speed = Math.floor(speed)
		}

		if (parseInt(getComputedStyle(obj)[name]) == tgt) {
			clearInterval(obj.timer)
			if (fn) {
				fn()
			}
		} else {
			obj.style[name] = parseInt(getComputedStyle(obj)[name]) + speed + 'px'
		}
	}, 30)
}
