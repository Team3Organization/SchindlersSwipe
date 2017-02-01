module.exports = {
    Dfs: function(graph){
        // Initializing.
        for (var verIdx in graph){
            var currVertex = graph[verIdx];
            currVertex.State = -1;
            currVertex.StartTime = null;
            currVertex.EndTime = null;
            currVertex.awayFromMe = null;
            currVertex.Parent = null;
        }

        this.awayFromMe = -1;
        this.time = 0;
        
        // Initializing the first element.
        for (var Idx in graph){
            var currNode = graph[Idx];
            // In case the node wasn't visited.
            if (currNode.State == -1){
                this.DfsVisit(graph,currNode);
            }
        }

        return graph;
    },
    DfsVisit : function(graph, node){
        this.awayFromMe += 1;        
        this.time += 1;
        node.awayFromMe = this.awayFromMe;
        node.StartTime = this.time;
        node.State = 0;

        for (var childIdx in node.Children){
            var currChild = this.getNodeById(graph,node.Children[childIdx]);
            if (currChild.State == -1){                                                
                currChild.Parent = node.UserID;                
                this.DfsVisit(graph,currChild);
            }
        }
        node.State = 1;
        this.time += 1;
        node.EndTime += this.time;
        this.awayFromMe -= 1;
    },
    SortByEndTime: function(graph){
        var length = graph.length;
        for (var i = (length - 1); i >= 0; i--) {
            //Number of passes
            for (var j = (length - i); j > 0; j--) {
                //Compare the adjacent positions
                if (graph[j].EndTime >= graph[j - 1].EndTime) {
                    //Swap the numbers
                    var tmp = graph[j];
                    graph[j] = graph[j - 1];
                    graph[j - 1] = tmp;
                }
            }
        }
    },
    TopologicalSort : function(graph){
        var dfsOutput = this.Dfs(graph);
        var sorted = this.SortByEndTime(dfsOutput);
        return this.clearGraphSearchData(sorted);
    },
    getNodeById : function(graph,UserID){
        var nodeToRet = null;          

        for (var idx in graph){
            var currNode = graph[idx];
            if (currNode.UserID == UserID){
                nodeToRet = currNode;
                break;
            }
        }

        return nodeToRet;
    },
    clearGraphSearchData : function(graph){
        for (var currIdx in graph){
            var curNode = graph[currIdx];
            if (curNode.State){
                delete currNode.State;
            }
            if (curNode.StartTime){
                delete currNode.StartTime;
            }
            if (curNode.EndTime){
                delete currNode.EndTime;
            }
        }
    }
}

var timer = -1;
var awayFromMe = -1;