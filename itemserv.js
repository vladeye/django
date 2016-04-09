app.factory('itemserv', function() { 
  var items = {};

  items.list = [
       { title: 'Casa', text: 'Limpieza general de la casa', isHidden: true, date:  new Date() },
       { title: 'Arreglo', text: 'Arreglo de los mesas del comedor', isHidden: true, date:  new Date() },
       { title: 'Corrección', text: 'Corrección de la maqueta para entregar', isHidden: true, date:  new Date() },
       { title: 'Pagos', text: 'Pagos de la seguridad social', isHidden: true, date:  new Date() },
     ];
  
  items.add = function(item){
    items.list.push({ title: item.title, text: item.text, isHidden: item.isHidden, date: item.date });
  };  

  return items;  
  

});

