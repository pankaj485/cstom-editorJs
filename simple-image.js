class SimpleImage {
	static get toolbox() {
		return {
			title: "Pank Image",
			icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path fill="#7D58E6" d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
		};
	}

	constructor({ data }) {
		this.data = data;
	}

	render() {
		const wrapper = document.createElement("div");
		const input = document.createElement("input");
		const customizationContainer = document.createElement("div");
		const heightInput = document.createElement("input");
		const widthInput = document.createElement("input");

		customizationContainer.classList.add("customizationContainer");
		customizationContainer.appendChild(heightInput);
		customizationContainer.appendChild(widthInput);

		wrapper.classList.add("simple-image");
		wrapper.appendChild(input);
		wrapper.appendChild(customizationContainer);

		input.placeholder = "Paste an image URL...";
		input.value = this.data && this.data.url ? this.data.url : "";

		heightInput.classList.add("heightInput");
		heightInput.placeholder = "Height";
		heightInput.value = this.data && this.data.height ? this.data.height : "";

		widthInput.classList.add("widthInput");
		widthInput.placeholder = "Width";
		widthInput.value = this.data && this.data.width ? this.data.width : "";

		return wrapper;
	}

	save(blockContent) {
		const input = blockContent.querySelector("input");
		const height = blockContent.querySelector(".heightInput");
		const width = blockContent.querySelector(".widthInput");

		return {
			url: input.value,
			height: height.value,
			width: width.value,
		};
	}
}
