// 导入 esprima 库
const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');
//引入commander
const commander = require("commander");

const fs = require("fs");

let filename = '';

//增加命令行选项（-f 输入文件）
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



// 专用变异规则实现

// 1 语义相近的API替换
// 正则节点生成
var random_regex_node = function(){
    let regex_code = "regexp[Symbol.method](string);";
    let random_index = Math.floor(Math.random()*51);
    let chars = "ABCDEFGHIJKLMNOPQRSTUZWXYZabcdefghijklmnopqrstuvwxyz";
    regex_code = regex_code.replace("regexp", chars.charAt(random_index));
    regex_code = regex_code.replace("string", chars.charAt(random_index));
    regex_code = regex_code.replace("method", chars.charAt(random_index));
    var regex_node;
    var regex_ast = esprima.parse(regex_code);
    console.log(regex_ast);
    estraverse.traverse(regex_ast, {
            enter: function (node) {
                if(node.type == "CallExpression" && node.callee.type === "MemberExpression" && (node.callee.property.type === 'Identifier'|| node.callee.property.property.type === 'Identifier')){
                    console.log(node);
                    regex_node = node;
                }
            },
            leave: function (node, parent) {}
        });
    return regex_node;
}

//String节点生成
var random_str_node = function(){
    let str_code = "string.method(regexp);";
    let random_index = Math.floor(Math.random()*51);
    let chars = "ABCDEFGHIJKLMNOPQRSTUZWXYZabcdefghijklmnopqrstuvwxyz";
    str_code = str_code.replace("regexp", chars.charAt(random_index));
    str_code = str_code.replace("string", chars.charAt(random_index));
    str_code = str_code.replace("method", chars.charAt(random_index));
    var str_node;
    var str_ast = esprima.parse(str_code);
    estraverse.traverse(str_ast, {
            enter: function (node) {
                if(node.type == "CallExpression" && node.callee.type === "MemberExpression" && (node.callee.property.type === 'Identifier'|| node.callee.property.property.type === 'Identifier')){
                    str_node = node;
                }
            },
            leave: function (node, parent) {}
        });
    return str_node;
}

// 相同的regex/string方法互换
var replace_similar_API = function(source) {
    let ast = esprima.parse(source);
    let source_copy = escodegen.generate(ast);
    let similar_API_name = ["match", "matchAll", "search", "replace", "split", "test"];
    estraverse.replace(ast, {
        enter: function (node) {
            if(node.type == "CallExpression" && node.callee.type === "MemberExpression" && (node.callee.property.type === 'Identifier'|| node.callee.property.property.type === 'Identifier')){
                //判断是否为str对象的可以对应替换regex对象的方法
                if(similar_API_name.includes(node.callee.property.name)){
                    let add_reg_node = random_regex_node();
                    console.log(add_reg_node);
                    add_reg_node.callee.object.name = node.callee.object.name;
                    add_reg_node.callee.property.property.name = node.callee.property.name;
                    add_reg_node.arguments = node.arguments;
                    return add_reg_node;
                }
                //判断是否为regex对象的可以对应替换str对象的方法
                if(node.callee.property.property != undefined){
                    if(similar_API_name.includes(node.callee.property.property.name)){
                        let add_str_node = random_str_node();
                        add_str_node.callee.object.name = node.callee.object.name;
                        add_str_node.callee.property.name = node.callee.property.property.name;
                        add_str_node.arguments = node.arguments;
                        return add_str_node;
                    }
                }
            }
        },
    });
    //console.log("===============ast====================");
    let codegen = escodegen.generate(ast);
    if(codegen != source_copy){
       console.log(codegen);
       console.log("replace_similar_API");
       console.log("------------------------------")
   }
};



// 2 返回值相同的API替换
// TODO:总结更多节点类型以及随机生成更加复杂多样的字符串（包含转义字符）以及数字等
// String返回值节点生成
var random_return_str_node = function(){
    let return_string_code = "var str1 = 'example'; var str2 = new String(9853); var str3 = [1,6,9,0].toString();";
    let random_index = Math.floor(Math.random()*51);
    let chars = "ABCDEFGHIJKLMNOPQRSTUZWXYZabcdefghijklmnopqrstuvwxyz";
    return_string_code = return_string_code.replace("str1", chars.charAt(random_index));
    return_string_code = return_string_code.replace("str2", chars.charAt(random_index));
    return_string_code = return_string_code.replace("str3", chars.charAt(random_index));
    var return_string_node = [];
    let return_string_ast = esprima.parse(return_string_code);
    estraverse.traverse(return_string_ast, {
            enter: function (node) {
                if(node.type == "VariableDeclarator"){
                    return_string_node.push(node);
                }
            }
        });
    return return_string_node;
}

//Number返回值节点生成
var random_return_num_node = function(){
    let return_number_code = "var num1 = 486514574564; var num2 = new Number(985746854653); var num3 = [1,6,9,0].push(678);"
    let random_index = Math.floor(Math.random()*51);
    let chars = "ABCDEFGHIJKLMNOPQRSTUZWXYZabcdefghijklmnopqrstuvwxyz";
    return_number_code = return_number_code.replace("num1", chars.charAt(random_index));
    return_number_code = return_number_code.replace("num2", chars.charAt(random_index));
    return_number_code = return_number_code.replace("num3", chars.charAt(random_index));
    var return_number_node = [];
    let return_number_ast = esprima.parse(return_number_code);
    estraverse.traverse(return_number_ast, {
            enter: function (node) {
                if(node.type == "VariableDeclarator"){
                    return_number_node.push(node);
                }
            }
        });
    return return_number_node;
}

var replace_return_API = function(source) {
    let return_string_name = ["toString", "join", "substring", "replace", "slice", "repeat"];
    let return_number_name = ["push", "pop", "unshift", "toFixed", "toPrecision", "toExponential"];
    let variable_str_list = [];
    let variable_num_list = [];
    let i = 0;
    let j = 0;
    let ast = esprima.parse(source);
    let source_copy = escodegen.generate(ast);
    estraverse.replace(ast, {
        enter: function (node) {
            if(node.type == "VariableDeclarator"){
                if((node.init.type == "Literal" && typeof(node.init.value) == "string") || (node.init.type == "NewExpression" && node.init.callee.name == "String") || (node.init.type == "CallExpression"  && node.init.callee.property != undefined && return_string_name.includes(node.init.callee.property.name))) {
                    variable_str_list.push(node.id.name);
                    return random_return_str_node()[Math.floor(Math.random() * random_return_str_node().length)];
                }
                if((node.init.type == "Literal" && typeof(node.init.value) == "number") || (node.init.type == "NewExpression" && node.init.callee.name == "Number") || (node.init.type == "CallExpression" && node.init.callee.property != undefined && return_number_name.includes(node.init.callee.property.name))) {
                    variable_num_list.push(node.id.name);
                    return random_return_num_node()[Math.floor(Math.random() * random_return_num_node().length)];
                }
            }
        },
        leave: function (node) {
            if(node.type == "VariableDeclarator"){
                if((node.init.type == "Literal" && typeof(node.init.value) == "string") || (node.init.type == "NewExpression" && node.init.callee.name == "String") || (node.init.type == "CallExpression" && node.init.callee.property != undefined && return_string_name.includes(node.init.callee.property.name))){
                    node.id.name = variable_str_list[i];
                    i += 1;
                }
                if((node.init.type == "Literal" && typeof(node.init.value) == "number") || (node.init.type == "NewExpression" && node.init.callee.name == "Number") || (node.init.type == "CallExpression" && node.init.callee.property != undefined && return_number_name.includes(node.init.callee.property.name))) {
                    node.id.name = variable_num_list[j];
                    j += 1;
                }
            }
        }
    });
    //console.log("===============ast====================");
    let codegen = escodegen.generate(ast);
    if(codegen != source_copy){
       console.log(codegen);
       console.log("replace_return_API");
       console.log("------------------------------")
   }
};



// 3 原型链污染
// 原型链修改节点
var random_proto_node = function(){
    var proto_code = "a.__proto__.foo = 'test';";
    var random_index = Math.floor(Math.random()*51);
    var chars = "ABCDEFGHIJKLMNOPQRSTUZWXYZabcdefghijklmnopqrstuvwxyz";
    proto_code = proto_code.replace("a", chars.charAt(random_index));
    proto_code = proto_code.replace("test", chars.charAt(random_index));
    //console.log(proto_code);
    var proto_node;
    var proto_ast = esprima.parse(proto_code);
    estraverse.traverse(proto_ast, {
            enter: function (node) {
                if(node.type == "ExpressionStatement" && node.expression.type == "AssignmentExpression"){
                    proto_node = node;
                }
            },
            leave: function (node, parent) {}
        });
    return proto_node;
}

var proto_pollution = function(source) {
    var ast = esprima.parse(source);
    let source_copy = escodegen.generate(ast);
    estraverse.traverse(ast, {
        enter: function (node, parent) {
            var offset = 0;
            if(node.type == "VariableDeclaration" && node.declarations[0].type == "VariableDeclarator"){
                //判断是否为直接定义
                if(node.declarations[0].init.type == "ObjectExpression"){
                    //获取语句所在代码块的位置
                    for(var index = 0; index < parent.body.length; index ++){
                        if (parent.body[index] == node)  break;
                    }
                    var add_node1 = random_proto_node();
                    add_node1.expression.left.object.object.name = node.declarations[0].id.name;
                    parent.body.splice(index + 1 + offset,0, add_node1);
                    //parent.body[index + 1 + offset].expression.callee.object.name = node.declarations[0].id.name;
                    offset += 1;
                }
                //判断是否为new定义
                if(node.declarations[0].init.type == "NewExpression" && node.declarations[0].init.callee.name == "Object"){
                    for(var index = 0; index < parent.body.length; index ++){
                        if (parent.body[index] == node)  break;
                    }
                    var add_node2 = random_proto_node();
                    add_node2.expression.left.object.object.name = node.declarations[0].id.name;
                    parent.body.splice(index + 1 + offset,0, add_node2);
                    offset += 1;
                }
            }
        },
    });
    //console.log("===============ast====================");
    let codegen = escodegen.generate(ast);
    if(codegen != source_copy){
       console.log(codegen);
       console.log("proto_pollution");
       console.log("------------------------------")
   }
};



// 4 属性篡改
// 属性修改节点
var modification_node_random = function(){
    var modification_code = "a.__defineGetter__(0, function(){ a.length = 1});" +
    "b.__defineGetter__(0, function(){ b.length = -1});" +
    "c.__defineGetter__(0, function(){ a.length = 1});" +
    "d.__defineGetter__(0, function(){ a.length = -1})";
    let modification_node = [];
    let modification_ast = esprima.parse(modification_code);
    estraverse.traverse(modification_ast, {
            enter: function (node) {
                if(node.type == "ExpressionStatement" && node.expression.type == "CallExpression"){
                    modification_node.push(node);
                }
            }
        });
    let random = 0;
    var add_node = modification_node[random];
    var property_name = ["__defineGetter__", "__defineSetter__"];
    var length_value = [0, 1, 0x1000000, 0x24924925, 0xFFFFFFFC, 0xffffffff, 0x7FFFFFE1, 0x7FFFFFC1, 0x10000, 0x10000000];
    add_node.expression.callee.property.name = property_name[Math.floor(Math.random() * property_name.length)];
    add_node.expression.arguments[1].body.body[0].expression.right = modification_node[Math.floor(Math.random() * modification_node.length)].expression.arguments[1].body.body[0].expression.right;
    if(add_node.expression.arguments[1].body.body[0].expression.right.type == "Literal"){
        add_node.expression.arguments[1].body.body[0].expression.right.value = length_value[Math.floor(Math.random() * length_value.length)];
    }
    else{
        add_node.expression.arguments[1].body.body[0].expression.right.argument.value = length_value[Math.floor(Math.random() * length_value.length)];
    }
    random += 1;
    return add_node;
}
// 对数组进行属性添加
var property_modification = function(source) {
    let return_array_name = ["copyWithin", "slice", "fill", "reverse", "concat", "split"];
    let ast = esprima.parse(source);
    let source_copy = escodegen.generate(ast);
    estraverse.traverse(ast, {
        enter: function (node, parent) {
            var offset = 0;
            if(node.type == "VariableDeclaration" && node.declarations[0].type == "VariableDeclarator"){
                //判断是否为直接定义
                if(node.declarations[0].init.type == "ArrayExpression"){
                    //获取语句所在代码块的位置
                    for(var index = 0; index < parent.body.length; index ++){
                        if (parent.body[index] == node)  break;
                    }
                    var add_node1 = modification_node_random();
                    add_node1.expression.callee.object.name = node.declarations[0].id.name;
                    add_node1.expression.arguments[1].body.body[0].expression.left.object.name = node.declarations[0].id.name;
                    parent.body.splice(index + 1 + offset,0, add_node1);
                    //parent.body[index + 1 + offset].expression.callee.object.name = node.declarations[0].id.name;
                    offset += 1;
                }
                //判断是否为new定义
                if(node.declarations[0].init.type == "NewExpression" && node.declarations[0].init.callee.name == "Array"){
                    for(var index = 0; index < parent.body.length; index ++){
                        if (parent.body[index] == node)  break;
                    }
                    var add_node2 = modification_node_random();
                    add_node2.expression.callee.object.name = node.declarations[0].id.name;
                    add_node2.expression.arguments[1].body.body[0].expression.left.object.name = node.declarations[0].id.name;
                    parent.body.splice(index + 1 + offset,0, add_node2);
                    //parent.body[index + 1 + offset].expression.callee.object.name = node.declarations[0].id.name;
                    offset += 1;
                }
                // 是否为API返回值
                if(node.declarations[0].init.type == "CallExpression" && node.declarations[0].init.callee.property != undefined){
                    if(return_array_name.includes(node.declarations[0].init.callee.property.name)){
                        for(var index = 0; index < parent.body.length; index ++){
                            if (parent.body[index] == node) break;
                        }
                    }
                    var add_node3 = modification_node_random();
                    add_node3.expression.callee.object.name = node.declarations[0].id.name;
                    add_node3.expression.arguments[1].body.body[0].expression.left.object.name = node.declarations[0].id.name;
                    parent.body.splice(index + 1 + offset,0, add_node3);
                    offset += 1;
                }
            }
        },
    });
    //console.log("===============ast====================");
    let codegen = escodegen.generate(ast);
    if(codegen != source_copy){
       console.log(codegen);
       console.log("property_modification");
       console.log("------------------------------")
   }
};



// 5 热点函数优化
// 热点函数优化节点
var random_optimization_node = function(){
    var func_code = "for (var i = 0; i < 100000; i++) a();a();";
    var random_index = Math.floor(Math.random()*51);
    var chars = "ABCDEFGHIJKLMNOPQRSTUZWXYZabcdefghijklmnopqrstuvwxyz";
    func_code = func_code.replaceAll("a()", chars.charAt(random_index)+"()");
    var opfunc_node = [];
    var op_node;
    var call_node;
    var func_ast = esprima.parse(func_code);
    estraverse.traverse(func_ast, {
            enter: function (node) {
                if(node.type == "ForStatement"){
                    op_node = node;
                    opfunc_node.push(op_node);
                }
                if(node.type == "ExpressionStatement" && node.expression.type == "CallExpression"){
                    call_node = node;
                    opfunc_node.push(call_node);
                }
            },
            leave: function (node, parent) {}
        });
    return opfunc_node;
}
var hotspot_optimization = function(source) {
    let ast = esprima.parse(source);
    let source_copy = escodegen.generate(ast);
    let name_func = [];
    let para_func = [];
    estraverse.traverse(ast, {
        enter: function (node, parent) {
            if(node.type == "CallExpression" && node.callee.type == "Identifier" && (!node.callee.name.includes("print"))){
                name_func.push(node.callee.name);
                para_func.push(node.arguments);
            }
        },
    });
   estraverse.traverse(ast, {
        enter: function (node, parent) {
            var offset = 0;
            if(node.type == "ExpressionStatement" && node.expression.type == "CallExpression" && node.expression.callee.type == "Identifier" && (!node.expression.callee.name.includes("print"))){
                for(var index = 0; index < parent.body.length; index ++){
                        if (parent.body[index] == node)  break;
                }
                var add_opfunc_node = random_optimization_node();
                var add_op_node = add_opfunc_node[0];
                add_op_node.body.expression.callee.name = node.expression.callee.name;
                if(name_func.includes(node.expression.callee.name)){
                    var index_func = name_func.indexOf(node.expression.callee.name);
                    add_op_node.body.expression.arguments = para_func[index_func];
                }
                parent.body.splice(index + 1 + offset,0, add_op_node);
                offset += 1;
                var add_call_node = add_opfunc_node[1];
                add_call_node.expression.callee.name = node.expression.callee.name
                parent.body.splice(index + 1 + offset,0, add_call_node);
                offset += 1;
            }
        },
    });
   //console.log("===============ast====================");
   let codegen = escodegen.generate(ast);
   if(codegen != source_copy){
       console.log(codegen);
       console.log("hotspot_optimization");
       console.log("------------------------------")
   }
};

readFromFile(filename, replace_similar_API);
readFromFile(filename, replace_return_API);
readFromFile(filename, proto_pollution);
readFromFile(filename, property_modification);
readFromFile(filename, hotspot_optimization);