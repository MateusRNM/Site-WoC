<script>
    import Logo from '$lib/assets/logo.png'
    import { tabActive, Tabs } from '$lib/siteData.js'
    let tabIdx = $state(-1)
    tabActive.subscribe((tabIndex) => {
        tabIdx = tabIndex
    })
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
        <img src={Logo} alt="" width="20" height="20" class="d-inline-block align-text-top">
        WoC
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {#each Tabs as tab, i}
            <li class="nav-item">
                <a class={tabIdx == i ? "nav-link active" : "nav-link"} href={tab.href}>{tab.name}</a>
            </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>