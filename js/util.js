
function getType(o)
{
    var _t;
    return ((_t = typeof(o)) == "object" ? o==null && "null" || Object.prototype.toString.call(o).slice(8,-1):_t).toLowerCase();
}
function extend(destination,source)
{
    for(var p in source)
    {
        if(getType(source[p])=="array"||getType(source[p])=="object")
        {
            destination[p]=getType(source[p])=="array"?[]:{};
            arguments.callee(destination[p],source[p]);
        }
        else
        {
            destination[p]=source[p];
        }
    }
}
// var test={a:"ss",b:"dd",c:{d:"css",e:"cdd"}};
// var test1={};
// extend(test1,test);
























function export_excel (rows, charset, type) {
    var tpl = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:{{type}}" xmlns="http://www.w3.org/TR/REC-html40">';
    tpl += '<head><meta charset="{{charset}}" /><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>';
    tpl += '表格1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->';
    tpl += '</head><body><table>{{table}}</table></body></html>';

    var office = '';
    var maph = [
        ['<thead><tr>', '</tr></thead>'],
        ['<tbody><tr>', '</tr></tbody>'],
        ['<tr>', '</tr>']
    ];
    var mapb = [
        ['<th>', '</th>'],
        ['<td style="vnd.ms-excel.numberformat:@">', '</td>']
    ];
    var flag = 0;
    var com = 1 - flag;

    for(var ii = 0; ii < rows.length; ii ++)
    {
        flag = ii > com ? 2 : flag;        
        office += maph[flag][0];
        for(var jj in rows[ii])
        {
            office += mapb[+!!flag][0] + rows[ii][jj] + mapb[+!!flag][1];
        }
        office += maph[flag][1];
        flag++;
    }
    return export_template(tpl, {
        charset: charset,
        type: type,
        table: office
    });
}
var doc = document;
var charset = doc.characterSet;

var uri = {
    /*json-wrap*/
    json: 'application/json;charset=' + charset,
    /*json-wrap*/
    /*txt-wrap*/
    txt: 'csv/txt;charset=' + charset,
    /*txt-wrap*/
    /*csv-wrap*/
    csv: 'csv/txt;charset=' + charset,
    /*csv-wrap*/
    /*xml-wrap*/
    xml: 'application/xml',
    /*xml-wrap*/
    /*doc-wrap*/
    doc: 'application/msword',
    /*doc-wrap*/
    /*xls-wrap*/
    xls: 'application/vnd.ms-excel',
    /*xls-wrap*/
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
};

function export_template(s, c) {
    return s.replace(/{{(\w+)}}/g, function(m, p) {
        return c[p];
    });
};


function excel(src, filename, type){
    var data = export_excel(src, charset, type);
    saveAs(new Blob([data], {
        type: uri[type]
        }), filename + '.' + type)
}

// excel([{"date":"2016-05-03","name":"王小虎_0","province":"上海","city":"普陀区","address":"上海市普陀区金沙江路 1518 弄","zip":20033},{"date":"2016-05-03","name":"王小虎_1","province":"上海","city":"普陀区","address":"上海市普陀区金沙江路 1518 弄","zip":20033},{"date":"2016-05-03","name":"王小虎_2","province":"上海","city":"普陀区","address":"上海市普陀区金沙江路 1518 弄","zip":20033},{"date":"2016-05-03","name":"王小虎_3","province":"上海","city":"普陀区","address":"上海市普陀区金沙江路 1518 弄","zip":20033},{"date":"2016-05-03","name":"王小虎_4","province":"上海","city":"普陀区","address":"上海市普陀区金沙江路 1518 弄","zip":20033}], "aaa", "xls")