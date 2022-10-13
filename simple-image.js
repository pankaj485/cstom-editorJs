class SimpleImage {
	static get toolbox() {
		return {
			title: "Pank Image",
			icon: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 290.99 290.99" style="enable-background:new 0 0 290.99 290.99;" xml:space="preserve"> <g> <path style="fill:#010002;" d="M280.112,30.82H10.878C4.868,30.82,0,35.694,0,41.699v207.593c0,6.005,4.868,10.878,10.878,10.878 h269.234c6.005,0,10.878-4.873,10.878-10.878V41.699C290.99,35.694,286.117,30.82,280.112,30.82z M266.52,219.828	c0,6.005-4.873,10.878-10.878,10.878H58.018c-6.01,0-10.878-4.873-10.878-10.878V71.162c0-6.005,4.868-10.878,10.878-10.878 h197.623c6.005,0,10.878,4.873,10.878,10.878V219.828z"/> <path style="fill:#010002;" d="M73.427,216.434h164.08c6.005,0,9.616-4.699,8.044-10.508l-26.069-96.837	c-1.566-5.803-4.15-9.388-5.776-8.012s-4.569,7.082-6.57,12.749l-21.299,60.183c-2.002,5.668-6.451,6.288-9.932,1.392	l-18.667-26.254c-3.486-4.895-9.23-4.971-12.842-0.169l-20.01,26.597c-3.612,4.803-10.155,5.434-14.62,1.414l-6.494-5.852	c-4.465-4.019-10.655-3.144-13.821,1.958l-21.163,34.098C65.122,212.295,67.417,216.434,73.427,216.434z"/> <circle style="fill:#010002;" cx="114.215" cy="117.622" r="15.409"/> </g> </svg>',
		};
	}

	constructor({ data }) {
		this.data = data;
	}

	render() {
		const input = document.createElement("input");
		input.value = this.data && this.data.url ? this.data.url : "";
		return input;
	}

	save(blockContent) {
		return {
			// url: blockContent.value
			url: "https://images.unsplash.com/photo-1665517576012-344e2e70143a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		};
	}
}
