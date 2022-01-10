// 导入 esprima 库
const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');
//引入commander
const commander = require("commander");

const fs = require("fs");

let filename = '';

commander
    .option('-f, --filename <type>', 'Set filename to execute')

commander.parse();
const options = commander.opts();
//console.log(options.filename);

if (options.filename)
    filename = options.filename;
/**
 * 从文件中读取原始语料并通过回调函数开始处理
 * @param {type} filename 文件名
 * @param {type} callback 执行变量名回填的回调函数
 * @returns {undefined}
 */
var readFromFile = function (filename, callback) {
    var code = fs.readFile(filename, 'utf-8', function (err, data) {
        if (err){
            console.log('NISL ERROR OCCURED: ' + err);
            console.log("----------");
        }
        else {
            callback(data.toString());
        }
    });
};

// 操作符替换
var replaceOperator = function(source) {
    var BinaryExpression = ["+", "-", "*", "/", "%", "==", "===", "!=", "!==", ">", "<", ">=", "<="];
    var UpdateExpression = ["++", "--"];
    var LogicalExpression = ["&&", "||"];
    //var mutation_result = [];
    var ast = esprima.parse(source);
    for(var i = 0; i<8 ;i++ ){
        estraverse.traverse(ast, {
            enter: function (node) {
                if(node.type == 'BinaryExpression'){
                    //console.log("current operator:", node.operator);
                    node.operator = BinaryExpression[Math.floor(Math.random() * BinaryExpression.length)];
                }
                if(node.type == 'UpdateExpression'){
                    //console.log("current operator:", node.operator);
                    node.operator = UpdateExpression[Math.floor(Math.random() * UpdateExpression.length)];
                }
                if(node.type == 'LogicalExpression'){
                    //console.log("current operator:", node.operator);
                    node.operator = LogicalExpression[Math.floor(Math.random() * LogicalExpression.length)];
                }
            },
            leave: function (node, parent) {}
        });
            codegen = escodegen.generate(ast);
            console.log(codegen);
            console.log("------------------------------");
            //if(! mutation_result.includes(codegen)){
                //mutation_result.push(codegen);
            //}
    }
    //console.log(mutation_result);
};


//source = "if(i<7){i = i + 1; i++}";
//replaceExpression(source);
readFromFile(filename, replaceOperator);
