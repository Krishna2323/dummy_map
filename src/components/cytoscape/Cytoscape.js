import React, { useEffect } from 'react'
import "./Cytoscape.scss"
import cytoscape from 'cytoscape';
const Cytoscape = () => {

  useEffect(()=>{
    var cy = cytoscape({
    container: document.getElementById('cy'), // container to render in
  
    elements: [ // list of graph elements to start with
      { // node a
        data: { id: 'a' }
      },
      { // node b
        data: { id: 'b' }
      },
      { // edge ab
        data: { id: 'ab', source: 'a', target: 'b' }
      }
    ],
  
    style: [ // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'background-image': 'url(http://localhost:3000/)',
          'label': 'data(id)',
          "background-fit":"contain",
          "background-color":"none"
        }
      },
  
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier'
        }
      }
    ],
  
    layout: {
      name: 'grid',
      rows: 1
    }
  
  });
},[])

  return (
    <div id='cy'>Cytoscape</div>
    )
  }

export default Cytoscape

// export function getSvg(type) {
//   const webAdress = getWebAdress();
//   return fileName => {
//     switch (type) {
//       case CORE:
//         return wrapURL(webAdress + svgBaseLocation + fileName);
//       case KUBERNETES:
//         return wrapURL(webAdress + kubernetesBaseLocation + fileName);
//       case SERVICE_MESH:
//         return wrapURL(webAdress + serviceMeshBaseLocation + fileName);
//       default:
//         throw new Error("Invalid svg type given in function 'getSvg(type)'");
//     }
//   };
// }

// function wrapURL(url) {
//   return `url(${url})`;
// }