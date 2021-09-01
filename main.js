//NEED SUPPORT FOR DRAG AND DROP
//NEED SUPPORT FOR CUSTOM CONTENT - TYPE PROGRAM OUTPUT


var shortAnswerQuestions = document.getElementsByClassName("short-answer-content-resource");
for(i=0;i<shortAnswerQuestions.length;i++){
	sectionIsComplete = shortAnswerQuestions[i].querySelector(".title-bar-chevron").classList.contains("check");
	if(!sectionIsComplete){
		var questions = shortAnswerQuestions[i].querySelectorAll(".short-answer-question");
		for(a=0;a<questions.length;a++){
			questions[a].querySelector(".show-answer-button").click();
			questions[a].querySelector(".show-answer-button").click();
			questions[a].querySelector(".ember-text-area").value = questions[a].querySelector(".forfeit-answer").innerHTML;
		}
		for(a=0;a<questions.length;a++){
			//questions[a].querySelector(".ember-text-area").addEventListener("Focus",questions[a].querySelector(".check-button").click());
		}
	}
};



var multipleChoiceQuestions = document.getElementsByClassName("multiple-choice-content-resource");
for(i=0;i<multipleChoiceQuestions.length;i++){
	sectionIsComplete = multipleChoiceQuestions[i].querySelector(".title-bar-chevron").classList.contains("check");
	if(!sectionIsComplete){
		var questions = multipleChoiceQuestions[i].querySelectorAll(".multiple-choice-question");
		for(a=0;a<questions.length;a++){
			var choices = questions[a].querySelectorAll(".zb-radio-button");
			for(b=0;b<choices.length;b++){
				choices[b].getElementsByTagName("label")[0].click();
			}
		}
	}
};


class ClassWatcher {
    constructor(targetNode, classToWatch, classAddedCallback, classRemovedCallback) {
        this.targetNode = targetNode
        this.classToWatch = classToWatch
        this.classAddedCallback = classAddedCallback
        this.classRemovedCallback = classRemovedCallback
        this.observer = null
        this.lastClassState = targetNode.classList.contains(this.classToWatch)

        this.init()
    }
    init() {
        this.observer = new MutationObserver(this.mutationCallback)
        this.observe()
    }
    observe() {
        this.observer.observe(this.targetNode, { attributes: true })
    }
    disconnect() {
        this.observer.disconnect()
    }
    mutationCallback = mutationsList => {
        for(let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                let currentClassState = mutation.target.classList.contains(this.classToWatch)
                if(this.lastClassState !== currentClassState) {
                    this.lastClassState = currentClassState
                    if(currentClassState) {
                        this.classAddedCallback()
                    }
                    else {
                        this.classRemovedCallback()
                    }
                }
            }
        }
    }
}

var animationPlayerActivities = document.getElementsByClassName("animation-player-content-resource");
for(i=0;i<animationPlayerActivities.length;i++){
	sectionIsComplete = animationPlayerActivities[i].querySelector(".title-bar-chevron").classList.contains("check");
	if(!sectionIsComplete){
		var animationComplete = false;
		var speedControlCheckbox = animationPlayerActivities[i].querySelector(".speed-control").getElementsByTagName("input")[0];
		var startButton = animationPlayerActivities[i].querySelector(".start-button");
		if(speedControlCheckbox.value == "false"){
			speedControlCheckbox.click();
		}
		startButton.click();
		let classWatcher = new ClassWatcher(animationPlayerActivities[i].querySelector(".pause-button,.play-button"), 'play-button', function(){if(!this.targetNode.classList.contains("rotate-180")){this.targetNode.click()}}, function(){});
	}
}

//NOT WORKING YET
var customContentActivities = document.getElementsByClassName("custom-content-resource");
if(customContentActivities){
	alert("There are "+customContentActivities.length+" activities left on this page!");
};

// for(i=0;i<customContentActivities.length;i++){
	// sectionIsComplete = customContentActivities[i].querySelector(".title-bar-chevron").classList.contains("check");
	// if(true == false){
	// 	if(customContentActivities[i].querySelector(".definition-match-payload")){
	// 		var terms = customContentActivities[i].querySelectorAll(".js-draggableObject");
	// 		var buckets = customContentActivities[i].querySelectorAll(".draggable-object-target");
	// 		//console.log(terms);
	// 		//console.log(buckets);


	// 		const mouseDownEvent = new MouseEvent('mousedown', {
	// 			clientX: terms[0].getBoundingClientRect().left,
	// 			clientY: terms[0].getBoundingClientRect().top,
	// 			bubbles: true,
	// 			cancelable: true
	// 		});

	// 		const mouseMoveEvent = new MouseEvent('mousemove', {
	// 			clientX: buckets[1].getBoundingClientRect().left + 3,
	// 			clientY: buckets[1].getBoundingClientRect().top,
	// 			bubbles: true,
	// 			cancelable: true
	// 		});

	// 		const mouseUpEvent = new MouseEvent('mouseup', {
	// 			bubbles: true,
	// 			cancelable: true
	// 		});

	// 		terms[0].dispatchEvent(mouseDownEvent);
	// 		terms[0].dispatchEvent(mouseMoveEvent);
	// 		terms[0].dispatchEvent(mouseUpEvent);


	// 		// for(a=0;a<terms.length;a++){
	// 		// 	//console.log(terms[a]);
	// 		// }
	// 	}else if(customContentActivities[i].querySelector(".definition-match-payload")){

	// 	}
	// }
// };
