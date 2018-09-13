//alert(Lockr.get('origin') + " - " + Lockr.get('destination'))

/*
Lockr.set('origin', 'HKG')
Lockr.set('destination', 'HKG')
Lockr.set('updated', 'true')*/

if (Lockr.get('updated') === 'true') {
  $('#new-booking').show()
  $('#origin').text(Lockr.get('origin'))
  $('#destination').text(Lockr.get('destination'))
}