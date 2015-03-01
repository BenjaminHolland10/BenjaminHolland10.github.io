<!DOCTYPE html>
<html>
<head>
    <title>04. Listen to mouse events. Vivagraph SVG tutorial.</title>
    <script type="text/javascript" src="/vivagraph.js"></script>

    <!--
    This example uses jQuery, but it's only for convenience of listenting
    to DOM events. The jQuery can be replaced with your favorite library.
     -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript">
        function main () {
            // As in previous steps, we create a basic structure of a graph:
            var graph = Viva.Graph.graph();

            graph.addNode('anvaka', '91bad8ceeec43ae303790f8fe238164b');
            graph.addNode('indexzero', 'd43e8ea63b61e7669ded5b9d3c2e980f');
            graph.addLink('anvaka', 'indexzero');

            var graphics = Viva.Graph.View.svgGraphics(),
                nodeSize = 24,
                // we use this method to highlight all realted links
                // when user hovers mouse over a node:
                highlightRelatedNodes = function(nodeId, isOn) {
                   // just enumerate all realted nodes and update link color:
                   graph.forEachLinkedNode(nodeId, function(node, link){
                       var linkUI = graphics.getLinkUI(link.id);
                       if (linkUI) {
                           // linkUI is a UI object created by graphics below
                           linkUI.attr('stroke', isOn ? 'red' : 'gray');
                       }
                   });
                };

            // Since we are using SVG we can easily subscribe to any supported
            // events (http://www.w3.org/TR/SVG/interact.html#SVGEvents ),
            // including mouse events:
            graphics.node(function(node) {
                var ui = Viva.Graph.svg('image')
                     .attr('width', nodeSize)
                     .attr('height', nodeSize)
                     .link('https://secure.gravatar.com/avatar/' + node.data);

                $(ui).hover(function() { // mouse over
                    highlightRelatedNodes(node.id, true);
                }, function() { // mouse out
                    highlightRelatedNodes(node.id, false);
                });
                return ui;
            }).placeNode(function(nodeUI, pos) {
                nodeUI.attr('x', pos.x - nodeSize / 2).attr('y', pos.y - nodeSize / 2);
            });

            graphics.link(function(link){
                return Viva.Graph.svg('path')
                              .attr('stroke', 'gray');
            }).placeLink(function(linkUI, fromPos, toPos) {
                var data = 'M' + fromPos.x + ',' + fromPos.y +
                           'L' + toPos.x + ',' + toPos.y;

                linkUI.attr("d", data);
            })

            // Finally render the graph with our customized graphics object:
            var renderer = Viva.Graph.View.renderer(graph, {
                    graphics : graphics
                });
            renderer.run();
        }
    </script>

    <style type="text/css" media="screen">
        html, body, svg { width: 100%; height: 100%;}
    </style>
</head>
<body onload='main()'>

</body>
</html>
