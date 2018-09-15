
if (Lockr.get('updated') === 'true') {
  $('.origin').text(Lockr.get('origin'))
  $('.destination').text(Lockr.get('destination'))
} else {
  $('.origin').text('Austin, USA')
  $('.destination').text('Beijing, China')
}