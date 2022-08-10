let micOn = false;

if (!("webkitSpeechRecognition" in window)) {
  alert(`Speech to text doesn't work on this browser`);
} else {
  // Initialize webkitSpeechRecognition
  let speechRecognition = new webkitSpeechRecognition();

  // String for the Final Transcript
  let final_transcript = "";

  // Set the properties for the Speech Recognition object
  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  // speechRecognition.lang = document.querySelector('#select_dialect').value;
  speechRecognition.lang = "en-US";

  const langIdButton = document.getElementById("lang-id");
  const langEnButton = document.getElementById("lang-en");

  langIdButton.addEventListener("click", () => {
    speechRecognition.lang = "id-ID";
    langIdButton.classList.add("lang-item-active");
    langEnButton.classList.remove("lang-item-active");
  });

  langEnButton.addEventListener("click", () => {
    speechRecognition.lang = "en-US";
    langEnButton.classList.add("lang-item-active");
    langIdButton.classList.remove("lang-item-active");
  });

  // // Callback Function for the onStart Event
  // speechRecognition.onstart = () => {
  //   // Show the Status Element
  //   document.querySelector('#status').style.display = 'block';
  // };
  // speechRecognition.onerror = () => {
  //   // Hide the Status Element
  //   document.querySelector('#status').style.display = 'none';
  // };
  // speechRecognition.onend = () => {
  //   // Hide the Status Element
  //   document.querySelector('#status').style.display = 'none';
  // };

  speechRecognition.onresult = (event) => {
    // Create the interim transcript string locally because we don't want it to persist like final transcript
    let interim_transcript = "";

    // Loop through the results from the speech recognition object.
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }

    // Set the Final transcript and Interim transcript.
    document.querySelector("#inputText").value = final_transcript;
    console.log(final_transcript);
    // document.querySelector('#interim').innerHTML = interim_transcript;
  };

  // // Set the onClick property of the start button
  // document.querySelector('#start').onclick = () => {
  //   // Start the Speech Recognition
  //   speechRecognition.start();
  // };
  // // Set the onClick property of the stop button
  // document.querySelector('#stop').onclick = () => {
  //   // Stop the Speech Recognition
  //   speechRecognition.stop();
  // };

  const micButton = document.querySelector("#start");

  micButton.addEventListener("click", () => {
    micOn = !micOn;
    micButton.classList.toggle("mic-on");

    if (micOn) {
      final_transcript = "";
      speechRecognition.start();
    } else {
      speechRecognition.stop();
    }
  });
}
