/*Event Driven
     Olay Temelli yaklaşımda programın akışını olaylar belirler, 
olay döngüsü içerisinde tamamlanan işlemler Callback vasıtasıyla işlemin tamamlandığını bildirir.


Non-Blocking
     Non-Blocking Bloklamayan bir yazılımda kodun bir parçasının çalışması durumunda 
kodun diğer bölümünün çalışmaması durumudur.


Example - Module File Export to circle-index.js
 */

const circleArea = radius => {
     return Math.PI * (radius * radius);
};
const circumference = radius => {
     return 2 * Math.PI * radius;
};
module.exports = {
     circleArea,
     circumference
};