<script setup>
import { ref } from 'vue'

</script>

<template>
<section>
    <h2>Les pianos disponibles</h2>
    <table>
      <thead>
        <tr>
          <th>Marque</th><th>Couleur</th><th>Stock</th>
        </tr>
      </thead>

      <tbody id="app">
        <tr v-for="piano in pianos">
          <td>{{ piano.Marque }}</td>
          <td>{{ piano.Couleur }}</td>
          <td>{{ piano.Stock }}</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td colspan="3">Délais sur commande très rapide</td>
        </tr>
      </tfoot>

    </table>
  </section>
</template>

<script>

export default{
  data () {
    return {
      pianos:
      [ 
        { 
        "id":1,
        "Marque": "Bechstein",
        "Couleur": "Noir",
        "Stock": 7
        },
        {  
        "id":2,
        "Marque": "Blüthner",
        "Couleur": "Ivoir",
        "Stock": 2
        },
        { 
        "id":3,
        "Marque": "Burgasser",
        "Couleur": "Blanc",
        "Stock": 5
        },
        {  
        "id":4,
        "Marque": "J.Czapka",
        "Couleur": "Noir",
        "Stock": 6
        },
        {  
        "id":5,
        "Marque": "J.Czapka",
        "Couleur": "Noir",
        "Stock": 6
        },
        {  
        "id":6,
        "Marque": "J.Czapka",
        "Couleur": "Noir",
        "Stock": 6
        },
        {  
        "id":7,
        "Marque": "J.Czapka",
        "Couleur": "Noir",
        "Stock": 6
        },
        {  
        "id":8,
        "Marque": "J.Czapka",
        "Couleur": "Noir",
        "Stock": 6
        }
    ]
    }  
  },

//   mounted () {
//     axios
//       .get('./assets/entrepots.json')
//       .then(response => (this.entrepots = response.data.entrepots))
//   }
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}
table {
  border: 2px solid yellow;
  width: 80%;
  margin: auto;
}
h2, table, thead, td {
  color: White;
}

a {
  color: #42b983;
}
</style>