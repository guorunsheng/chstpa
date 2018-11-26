<template>
    <div class="oper-col">
    <ul>
      <li><a href="http://www.baidu.com">gdfg</a></li>
    </ul>

    </div>
</template>
<script>
  export default {
    data() {
      return {
       
      }
    }
  }
</script>
<style lang="scss" scoped>
.oper-col {
  // height: 136px;
  margin-top: 16px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;

  .oper-col-item {
    text-align: center;
    cursor: pointer;
    width: 20%;
    background-color: #70cad6;
    border-radius: 12px;
    padding-top: 12px;
    .item-img {
      width: 56px;
      height: 56px;
    }
    p {
        color: #f6f6f6;
        margin-top: 0;
        font-weight: bold;
    }
    &:hover {
        background-color: #09abbf;
    }
  }
}
</style>