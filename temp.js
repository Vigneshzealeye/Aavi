var node={
    "topic":"tn43",
    "sts":1
}
delete node["sts"]
var node1={}
node1["topic"]=node["topic"]
console.log(node1)