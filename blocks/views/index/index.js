ctrl.startup = function() {
	if ('<%=bi.client.category%>' === 'mobile' || '<%=bi.client.category%>' === 'tablet') { 		
		ctrl.sel(".content").addClass('mobile');			
	}
};

// ctrl.showInfo = function() {
// 	ctrl.sel('.glyphicon-remove').click(function() {	
// 		ctrl.sel('.item li').hide();
// 	})
// }