function move(obj, name, tgt, fn) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function() {
		if (name == 'opacity') {
			cur = getComputedStyle(obj)[name] * 100
		} else if (name == 'width' || name == 'height' || name == 'font-sise' || name == 'border-width' || name ==
			'border-radius') {
			cur = parseInt(getComputedStyle(obj)[name])
		} else {
			cur = getComputedStyle(obj)[name]
		}

		let speed = (tgt - cur) / 10
		//三元运算符
		speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed)

		if (cur == tgt) {
			clearInterval(obj.timer)
			if (fn) {fn()}
		} else {
			if (name == 'opacity') {
				obj.style[name] = (cur + speed) / 100
			} else if (name == 'width' || name == 'height' || name == 'font-sise' || name == 'border-width' || name ==
				'border-radius') {
				obj.style[name] = cur + speed + 'px'
			} else {
				obj.style[name] = tgt
			}
		}
	}, 30)
}
