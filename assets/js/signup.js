console.log('connected')
var formData = JSON.stringify($("#myForm").serializeArray());
console.log(formData)
var serverURL = 'https://api.mlab.com/api/1/databases/mycaragents/collections/signupForm?apiKey=rMgfXX1SV_HmYBKnBpMCgf4dqTSaoR4G'
var form = $('form')
$('#formy').click(postRequest)
let array = []


let data = {
  name: 'hello',
  data: array
}

function postRequest(e){
  e.preventDefault()
  parseForm()
  serialize()
  console.log(form)
  console.log(form[0][0].value)
  console.log(formData)

  $.ajax({
    type: "POST",
    url: serverURL,
    data: JSON.stringify(data),
    success: function(){console.log('Posted to DB')},
    dataType: "json",
    contentType : "application/json"
  });
}


const parseForm = () => {
  for(let i = 0; i < form[0].length; i++){
    array.push(form[0][i].value)
  }
  console.log(array)
}

const serialize = () => {
  // var formData = JSON.stringify($("#myForm").serializeArray());
  console.log(JSON.stringify(array).serializeArray)
}