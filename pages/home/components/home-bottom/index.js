import { shopSearch } from "../../../../server/api/shop"
import { userLogin } from "../../../../server/api/user"

Component({  
  properties: {
    commodtityL: {
      type: Array
    },
    commodtityR: {
      type: Array
    }
  },  
  data: {    
  },
  methods: {
    testMethods() {
      // shopSearch({
      //   id: 1000000
      // }).then(res => {
      //   console.log(res);
      // })
    }
  }
})

