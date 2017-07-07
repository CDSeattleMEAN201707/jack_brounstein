$(document).ready(() => {
	console.log("jQuery?")

	const socket = io.connect()

	$("button").click(() => {
		socket.emit("click")
	})

	socket.on("count", (data) => {
		$("#click_count").text(data.clicks)
		alert(data.time)
	})
})