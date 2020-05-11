<template>
  
  <v-row>
  <v-card
    v-for="(post, index) in posts"
    :key="index"
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <v-img
      height="250" class="mb-3"
      :src="post.Img"
    ></v-img>
    <v-card-actions class="float-right">
        <v-avatar class="mr-2">
          <img
            :src="post.Country.flagImg"
          >
        </v-avatar>
        {{ post.Country.name }}
      </v-card-actions>

    <v-card-title>{{post.TenShop}}</v-card-title>
    

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="post.Rate"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        

        <div class="grey--text ml-4">{{post.Rate}}</div>
        
      </v-row>




    </v-card-text>
    

    <v-divider class="mx-4"></v-divider>
    

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

  </v-card>
  </v-row>
  
</template>
  

<script>
import { mapActions, mapState } from "vuex";
import { axios } from "axios";
export default {
  data(){
    return{
      loading: false,
      selection: 1,
      posts:[
        {
          Id: 1,
          TenShop: "Shoppe",
          Img: "data:image/png;base64,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",
          Rate: 3,
          Country:{
             flagImg: "https://sites.google.com/site/inmaycotoquoc/_/rsrc/1510655830040/tin-tuc/y-nghia-hinh-anh-tren-co-to-quoc-cua-cac-nuoc-dhong-nam-a/th%C3%A1i%20lan.png?height=266&width=400",
             name: "ThaiLan",
          }
        },
        {
          Id: 2,
          TenShop: "Tiki",
          Img: "https://bloglagi.info/wp-content/uploads/2019/08/logo_Tiki.jpg",
          Rate: 5,
          Country:{
             flagImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAh1BMVEXaJR3//wDZEx7qlxTXAB7ZHR3aIB3//QDzxg7pkBXZGB3YCx7rmxTqlhTbKB320wz1zg3iZBnwtxD99wPhXRn88QXiaRj54gntpxLjcBjkdhf65gjcMxzurBL76wfsohP43AroihXnhBbmfhfvshHgVRrfTRvyvw/dPBv10AzzyA7wthHeSBszN/CXAAAEGElEQVR4nO3d6XaiQBAFYLst2hHc17jFJTFxEt//+UZEkIYGcZmjVN/v98wcqPE22FRJpQIAAAAAAAAAAAAAAAAAAAAAAAAAZ61nH8DroT/07EN4NWondurZB/FiZEM05LMP4sXQWIwRHo2aCyHmCE+cbB5q0kR44mh1qMkK4YlRLeFrITxnsn6sSR3hOTtGR4g2whNRSgQUwhOS61NN1ghPiNqnmiA8EVeE3GcfyqtwN1FNNihKgDpRTToIT8ATZ96zD+Y1uB+xmnwgPD76idXkB+HxkYhDTQ7cqVaTKcLjb05rNcFWdSUZHYTnwJ0kajJBeOg7UZNvfFColqhJzfqaOCORNHKefVBP5iWjcwiP7ff3qeggPE43VRIhunaHx+sZatKzOzzUN9Skb3V4nIGhJEIMbA6P92msyafN4aGhsSZDi8PjbI0lEWLLMDyOLIQWGTVZULF/oESlcybLahF1c3QO4akX+vvLaYmK4ppuOx6vV6ptBRql79kfblSypdh12pdP6i5tVboH7oqa/7UkVSpjX4b3lbWE3m/4VbLchJzUvuKjfFOJLjgJNL18fjf4KOmHJCDn44dXZDwv3eKqU/T24JK8lXJx1dHAtEdyq9qg1LkJubJz+VwL+uuW6tY1m6L1g0pSZ5CbkLd7f0BFhntWe00O3f+tsFfimxIzSj4rv9aExeKqk63VHRVZtUp+U2KmqHFzSZaMFlcdbW+7VelvGeYm5Hh/Llcg5cfjtrjqaHO5Bgkbxh+SgJzPrqrIbMdycdWpzCcYJp9sF1cddYsutf2ybUPfjoqutBY1y3qXq3HC6gtOHm0QI581YxraIEY+a8Y0kt3keSypiXvNZr4lYxqFrzo+S64810THkvCkBjHyWTGmceUDUyvGNAzd5Hls6DQ3DGLks2BMw9hNnseCTvMro2NDp7lxEOMoc+llP6bh/ZpPfLilrLamX+7hMQ5iHG5XPafiZNzgcg9PxiDGaRuazJsIzMc0jIMYs6jxyLyBzXxMwzSIsYhtQxs3sHmPaRgGMWpd/Yypm75YcxzTiHipT0E71XjkuqkO7AXn8KSi0zQ8vlFUtyg8ap8414zGI2+fqN2e74MvqfeFZndDJzuw3/g+HyWtq22alwi9A/udbXi06IwvNB7JVrwDm2145PJ8kpcbjxTF/zjX8FB0k1qs8SjW1jRjGh61C8+wI4ttPLte1IHN9IUAMmzxWxf/T486sJm+EICCRfN9d81dadiBzfOFAMef9Rfi98rGI0XBV2mWLwSQVf/Ubmg8CuZyqxzD4/82+eqm+VepVjxfCOD/rH/jxoY9RVWWLwSQjf4d86/01Wd45XGrd/0KhSOrDB+m33tKDEsCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAzD+q9i3I9cDwkgAAAABJRU5ErkJggg==",
             name: "VietNam",
          }
        },
        {
          Id: 1,
          TenShop: "Lazada",
          Img: "https://zozo.vn/upload/public/news/2017/12/26/xu3NDvFt.png",
          Rate: 4,
          Country:{
             flagImg: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
             name: "China",
          }
        },
        {
          Id: 1,
          TenShop: "Shoppe",
          Img: "data:image/png;base64,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",
          Rate: 3,
          Country:{
             flagImg: "https://sites.google.com/site/inmaycotoquoc/_/rsrc/1510655830040/tin-tuc/y-nghia-hinh-anh-tren-co-to-quoc-cua-cac-nuoc-dhong-nam-a/th%C3%A1i%20lan.png?height=266&width=400",
             name: "ThaiLan",
          }
        },
        {
          Id: 2,
          TenShop: "Tiki",
          Img: "https://bloglagi.info/wp-content/uploads/2019/08/logo_Tiki.jpg",
          Rate: 5,
          Country:{
             flagImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAh1BMVEXaJR3//wDZEx7qlxTXAB7ZHR3aIB3//QDzxg7pkBXZGB3YCx7rmxTqlhTbKB320wz1zg3iZBnwtxD99wPhXRn88QXiaRj54gntpxLjcBjkdhf65gjcMxzurBL76wfsohP43AroihXnhBbmfhfvshHgVRrfTRvyvw/dPBv10AzzyA7wthHeSBszN/CXAAAEGElEQVR4nO3d6XaiQBAFYLst2hHc17jFJTFxEt//+UZEkIYGcZmjVN/v98wcqPE22FRJpQIAAAAAAAAAAAAAAAAAAAAAAAAAZ61nH8DroT/07EN4NWondurZB/FiZEM05LMP4sXQWIwRHo2aCyHmCE+cbB5q0kR44mh1qMkK4YlRLeFrITxnsn6sSR3hOTtGR4g2whNRSgQUwhOS61NN1ghPiNqnmiA8EVeE3GcfyqtwN1FNNihKgDpRTToIT8ATZ96zD+Y1uB+xmnwgPD76idXkB+HxkYhDTQ7cqVaTKcLjb05rNcFWdSUZHYTnwJ0kajJBeOg7UZNvfFColqhJzfqaOCORNHKefVBP5iWjcwiP7ff3qeggPE43VRIhunaHx+sZatKzOzzUN9Skb3V4nIGhJEIMbA6P92msyafN4aGhsSZDi8PjbI0lEWLLMDyOLIQWGTVZULF/oESlcybLahF1c3QO4akX+vvLaYmK4ppuOx6vV6ptBRql79kfblSypdh12pdP6i5tVboH7oqa/7UkVSpjX4b3lbWE3m/4VbLchJzUvuKjfFOJLjgJNL18fjf4KOmHJCDn44dXZDwv3eKqU/T24JK8lXJx1dHAtEdyq9qg1LkJubJz+VwL+uuW6tY1m6L1g0pSZ5CbkLd7f0BFhntWe00O3f+tsFfimxIzSj4rv9aExeKqk63VHRVZtUp+U2KmqHFzSZaMFlcdbW+7VelvGeYm5Hh/Llcg5cfjtrjqaHO5Bgkbxh+SgJzPrqrIbMdycdWpzCcYJp9sF1cddYsutf2ybUPfjoqutBY1y3qXq3HC6gtOHm0QI581YxraIEY+a8Y0kt3keSypiXvNZr4lYxqFrzo+S64810THkvCkBjHyWTGmceUDUyvGNAzd5Hls6DQ3DGLks2BMw9hNnseCTvMro2NDp7lxEOMoc+llP6bh/ZpPfLilrLamX+7hMQ5iHG5XPafiZNzgcg9PxiDGaRuazJsIzMc0jIMYs6jxyLyBzXxMwzSIsYhtQxs3sHmPaRgGMWpd/Yypm75YcxzTiHipT0E71XjkuqkO7AXn8KSi0zQ8vlFUtyg8ap8414zGI2+fqN2e74MvqfeFZndDJzuw3/g+HyWtq22alwi9A/udbXi06IwvNB7JVrwDm2145PJ8kpcbjxTF/zjX8FB0k1qs8SjW1jRjGh61C8+wI4ttPLte1IHN9IUAMmzxWxf/T486sJm+EICCRfN9d81dadiBzfOFAMef9Rfi98rGI0XBV2mWLwSQVf/Ubmg8CuZyqxzD4/82+eqm+VepVjxfCOD/rH/jxoY9RVWWLwSQjf4d86/01Wd45XGrd/0KhSOrDB+m33tKDEsCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAzD+q9i3I9cDwkgAAAABJRU5ErkJggg==",
             name: "VietNam",
          }
        },
        {
          Id: 1,
          TenShop: "Lazada",
          Img: "https://zozo.vn/upload/public/news/2017/12/26/xu3NDvFt.png",
          Rate: 4,
          Country:{
             flagImg: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
             name: "China",
          }
        },

        

      ]
    }
  },
  computed: {
    ...mapState("shop", {
      Shops: "shops",
    }),
    ...mapState("user", {
      userInfo: "info",
    })
  },
  methods:{
    goTo(url){
        this.$router.push({path: url})
    }
  },

}
</script>
