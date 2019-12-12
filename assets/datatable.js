var datatableObject;
var editorObject;

function initializeDatatable(table) {
  datatableObject = $(table).DataTable({
    scrollX:       true,
    paging:        true,
    serverSide:    true,
    fixedHeader:   false,
    pageLength:    25,
    autoWidth:     false,
    aLengthMenu:   [25, 50, 100],
    searchDelay:   1000,
    order:         [],
    buttons:       [{ extend: 'excel', exportOptions: { modifier: { page: 'all', search: 'none' } } }],
    ajax:          '/data',
    columns: [
      { data: 'first_name', title: 'First Name' },
      { data: 'last_name', title: 'Last Name' },
      { data: 'position', title: 'Position', className: 'editable' },
      { data: 'office', title: 'Office' },
      { data: 'office', title: 'Office' },
      { data: 'office', title: 'Office' },
      { data: 'office', title: 'Office' },
      { data: 'office', title: 'Office' },
      { data: 'office', title: 'Office' },
      { data: 'office', title: 'Office' },
      { data: 'start_date', title: 'Start Date' },
      { data: 'salary', title: 'Salary' }
    ],
    fixedColumns: {
      leftColumns:  1,
      rightColumns: 1
    }
  });
}

function initializeEditor(table) {
  editorObject = new $.fn.dataTable.Editor({
    ajax: '/abc',
    table: '.js-datatable',
    fields: [{ name: 'position', label: 'Position' }]
  });

  $(datatableObject.table().container()).on('click', 'td.editable', function(e) {
    editorObject.inline(this);
  });
}

$(document).ready(function() {
  $.each($('.js-datatable'), function() {
    initializeDatatable(this);
    initializeEditor(this);
  });
});
