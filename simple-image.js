class SimpleImage {
	static get toolbox() {
		return {
			title: "Pank Image",
			icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path fill="#7D58E6" d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
		};
	}

	constructor({ data }) {
		this.data = data;
		this.imageInputWrapper = undefined;
		this.container = undefined;
	}

	render() {
		const container = document.createElement("div");
		const imageInputWrapper = document.createElement("div");
		const imageInputContainer = document.createElement("div");
		const input = document.createElement("input");
		const imageCaption = document.createElement("input");
		const customizationContainer = document.createElement("div");
		const heightInput = document.createElement("input");
		const widthInput = document.createElement("input");

		imageInputContainer.classList.add("imageInputContainer");
		imageInputContainer.appendChild(input);
		imageInputContainer.appendChild(imageCaption);

		customizationContainer.classList.add("customizationContainer");
		customizationContainer.appendChild(widthInput);
		customizationContainer.appendChild(heightInput);

		imageInputWrapper.classList.add("simple-image");
		imageInputWrapper.appendChild(imageInputContainer);
		imageInputWrapper.appendChild(customizationContainer);

		input.placeholder = "Paste an image URL...";
		input.value = this.data && this.data.url ? this.data.url : "";

		imageCaption.placeholder = "Caption...";
		imageCaption.classList.add("outputImageCaption");

		(imageCaption.value =
			this.data && this.data.imageCaption ? this.data.imageCaption : ""),
			heightInput.classList.add("heightInput");
		heightInput.placeholder = "Height";
		heightInput.value = this.data && this.data.height ? this.data.height : "";

		widthInput.classList.add("widthInput");
		widthInput.placeholder = "Width";
		widthInput.value = this.data && this.data.width ? this.data.width : "";

		// ==============================
		// create position dropdown
		// ==============================
		const options = ["left", "right", "top", "bottom"];

		const selectElement = document.createElement("select");
		selectElement.classList.add("selectElement");

		// create placeholder option
		const placeholderOption = document.createElement("option");
		placeholderOption.disabled = true;
		placeholderOption.selected = true;
		placeholderOption.textContent = "Position";
		selectElement.appendChild(placeholderOption);

		// create options dynamically based on options array
		for (
			let currentOption = 0;
			currentOption < options.length;
			currentOption++
		) {
			const optionElement = document.createElement("option");

			optionElement.textContent = options[currentOption];
			optionElement.classList.add("imagePositionOption");
			optionElement.classList.add(options[currentOption]);

			selectElement.appendChild(optionElement);
		}

		customizationContainer.appendChild(selectElement);

		// ==============================
		// create layout container
		// ==============================
		let row = 3;
		let col = 3;

		const positionContainer = document.createElement("div");
		positionContainer.classList.add("positionContainer");

		// create rows
		for (let currentRow = 1; currentRow <= Number(row); currentRow++) {
			const rowElement = document.createElement("div");
			rowElement.classList.add(`row-${currentRow}`);
			positionContainer.appendChild(rowElement);
			// create columns
			for (let currentCol = 1; currentCol <= Number(col); currentCol++) {
				const colElement = document.createElement("div");
				colElement.classList.add("positionElement");
				colElement.setAttribute(
					"position",
					`row-${currentRow}-col-${currentCol}`
				);
				rowElement.appendChild(colElement);
			}
		}

		container.classList.add("container");
		container.appendChild(imageInputWrapper);
		container.appendChild(positionContainer);

		const getImageButton = document.createElement("button");
		getImageButton.textContent = "Get Image";
		imageInputWrapper.appendChild(getImageButton);

		getImageButton.addEventListener("click", (event) => {
			const height = heightInput.value;
			const width = widthInput.value;
			const imageUrl = input.value;

			this._createImage(imageUrl, width, height);
		});

		this.container = container;
		this.imageInputWrapper = imageInputWrapper;

		return container;
	}

	_createImage(url, width, height) {
		console.log(url);

		const image = document.createElement("img");
		const outputContainer = document.createElement("div");

		outputContainer.classList.add("outputContainer");
		outputContainer.style.marginTop = "1rem";

		image.src = url;
		image.classList.add("outputImage");
		image.style.width = width;
		image.style.height = height;

		outputContainer.appendChild(image);
		this.imageInputWrapper.appendChild(outputContainer);
	}

	save(blockContent) {
		const input = blockContent.querySelector("input");
		const height = blockContent.querySelector(".heightInput");
		const width = blockContent.querySelector(".widthInput");
		const imageCaption = blockContent.querySelector(".outputImageCaption");
		let selectElement = blockContent.querySelector(".selectElement");

		return {
			url: input.value,
			height: height.value,
			width: width.value,
			position: selectElement.options[selectElement.selectedIndex].text,
			imageCaption: imageCaption.value,
		};
	}
}
