
	const form = document.getElementById("form");
	const modal = document.querySelector(".modal");
	const modalOpen = document.querySelector(".btn-calc");
	const modalClose = document.querySelector(".modal__close");

		form.addEventListener("submit",(e)=> {
		e.preventDefault();
		modal.classList.add("modal--show");

		
		const gender = getSelectedValue("gender");
		const age = getInputNumberValue("age");
		const weight = getInputNumberValue("weight");
		const height = getInputNumberValue("height");
		const levelAct = getSelectedValue("levelAct");

		
		const tmb = (
			gender === "female"
			? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
			: (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
		);

		const maintenance = Math.round(tmb * Number(levelAct));
		const loseWeight = maintenance - 500;
		const gainWeight = maintenance + 500;

		const layoutLost = `<strong>${loseWeight} KCals/dia<strong>`;
		const layoutMaintenance =  `<strong>${maintenance} KCals/dia</strong>`;
		const layoutWin =  `<strong>${gainWeight} KCals/dia</strong>`;

		const lose = document.getElementById("lose");
		const main = document.getElementById("maintenance");
		const win = document.getElementById("win");

		lose.innerHTML = layoutLost;
		main.innerHTML = layoutMaintenance;
		win.innerHTML = layoutWin;
		

	function getSelectedValue(id) {
		const select = document.getElementById(id);
		return select.options[select.selectedIndex].value;
	}

	function getInputNumberValue(id) {
		return Number(document.getElementById(id).value);

	} 
	})	

