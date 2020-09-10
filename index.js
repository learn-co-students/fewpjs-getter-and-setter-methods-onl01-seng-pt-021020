// Add your Circle class here
class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	get diameter() {
		return this.radius * 2
	}

  set diameter(newR) {
    this.radius = newR / 2
	}

	get circumference() {
		return Math.PI * this.diameter
	}

	set circumference(newD) {
		this.diameter = newD / Math.PI
	}

	get area() {
		return Math.PI * this.radius ** 2
	}

	set area(newArea) {
		 newArea = Math.PI * newArea ** 2
	}
}
