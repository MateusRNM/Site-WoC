<script>
    let { img, name, desc } = $props()
</script>

<div class="card m-3" style="width: 18rem;">
  <center><img src={img} class="card-img-top img-fluid mt-3" alt=""></center>
  <div class="card-body">
    <hr>
    <h5>{name}</h5>
    <hr>
    <p class="card-text">{desc}</p>
  </div>
</div>

<style>
    img {
        object-fit: contain;
        width: 13rem;
        height: 13rem;
    }
</style>