

if (Lockr.get('updated') === 'true') {
  $('#new-booking').show()
  $('#origin').text(Lockr.get('origin'))
  $('#destination').text(Lockr.get('destination'))

  Lockr.set('updated', 'false')
}