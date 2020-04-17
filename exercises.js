if (42) {  
  if (42 == "42") {  
      if (true) {  
          if (42 == true) {  
              console.log("All that is true will succeed in the end.");  
          } else {  
              console.log("So close, but no.");  
          }  
      } else {  
          console.log("Inconceivable!");  
      }  
  } else {  
      console.log("But they look the same!!");  
  }  
} else {  
  console.log("It is the meaning of life, but isn't truthy?!?!?");  
}

function callSomeoneLater(name, callback) {  
  let messageEvent = {  
      message: `Hi ${name}!`  
  };  
  callback.bind(messageEvent);  
}  

// but why does this use of `callSomeoneLater` not work? 
function MyObject(name) {  
  this.name = name;  

  this.invokeGreeting = () => {  
      callSomeoneLater(this.name, (message) => {
        console.log(this);  
          console.log(message);  
      }) ; 
  }  
}  

let kelly = new MyObject("Kelly");  
kelly.invokeGreeting(); 

function NamedList(name, items) {
  let innerValues = items;

  return Object.freeze({
      name,
      [Symbol.iterator]: function * () {  
          yield * innerValues;  
      } 
  })
}

let tens = new NamedList("byTens", [10, 20, 30]);
for (let num of tens) {  
  console.log(num);  
}

const messageFactory = (errorCode = 500,  
  message = "Unknown server error",  
  severity = "FATAL error") => {  
  return Object.freeze({  
    report: () => `${severity} ${errorCode}: ${message}`  
  });  
};  

const warning = (factory) => {  
return (errorCode, message) => factory(errorCode, message, "WARNING");  
};  
const warningFactory = warning(messageFactory);  

console.log(  messageFactory(401, "Unauthorized").report()  );
console.log(  warningFactory(455, "Disk low on space").report()  );

const ERROR_INFORMATION = {  
  500: "Something bad happened, we are not sure what",  
  455: "Contact support, your disk cuota needs to be increased",  
  401: "Are you sure you are who you think you are?!?"  
};

function extractError({code, text, level}) {  
   return { errorCode: code, message: text, warning: level };  
}  
 
function informError(errorObject) {  
   let {errorCode} = errorObject;  
   let info =  ERROR_INFORMATION[errorCode];  
 
   return { ...errorObject, info };  
}  

// --- test it out:
 
let testError = {  
   code: 500,  
   text: "Unknown server error",  
   server: "www.xyz.com",  
   time: 1583793829,  
   level: "FATAL"  
};  
 
let result = informError(extractError(testError));

console.log(result);

class Counter {  
  #count = 0;
  constructor(initialValue) {  
    this.#count = initialValue;  
  }  

  increment(delta) {  
      this.count += delta;  
  }  

  report() {  
      return this.count;  
}  
}  

// test code:  

let counter = new Counter(10);  
counter.increment(5);  

let result1 = counter.report();  

console.log(counter.count);


async function fetchEventFromServer(eventId) {  
  // mocked response  
  return Promise.resolve({  
      id: eventId,  
      internalId: `int-${eventId.slice(2)}`,  
      message: `something for event ${eventId}` 
  });  
}  

async function * dedupedEvents(...fetchEventIds) {  
  let seenInternalIds = new Set();  
  let eventIdToInternalIdMap = {};  

  for (let eventId of fetchEventIds) {  
      if (!seenInternalIds.has(eventIdToInternalIdMap[eventId])) {  
          let eventBody = await fetchEventFromServer(eventId); 
          eventIdToInternalIdMap[eventId] = eventBody.internalId;
           
          if (!seenInternalIds.has(eventBody.internalId)) {  
              seenInternalIds.add(eventBody.internalId);  
              yield eventBody;  
          }   
      }  
  }  
} 

// test the code...  
(async () => {  
  let eventList = ['e-1', 'e-2', 'x-1', 'e-3', 'e-4', 'x-2', 'e-5', 'z-5', 'e-1'];
  for await (let event of dedupedEvents(...eventList)) {  
      console.log(event.internalId);  
  }  
})();

function callSomeoneLater(name, callback) {  
  let messageEvent = {  
      message: `Hi ${name}!`  
  };  
  callback.apply(messageEvent);  
}  

// but why does this use of `callSomeoneLater` not work? 
function MyObject(name) {  
  this.name = name;  

  this.invokeGreeting = () => {  
      callSomeoneLater(this.name, () => {  
          console.log(this.message);  
      }) ; 
  }  
}  

let kelly = new MyObject("Kelly");  
kelly.invokeGreeting(); 
