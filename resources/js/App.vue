<template>
	<main>
		
  <!-- Page Wrapper -->
  <div id="wrapper">
    
    <Header />
    

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">
        <SideBar /> 

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <router-view></router-view>

        </div>
        <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->

      <Footer />

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->
	</main>
</template>

<script>

	import Header from './components/Header.vue';
	import SideBar from './components/SideBar.vue';
	import Footer from './components/Footer.vue';

	export default {
   		components: {
      		Header,
      		SideBar,
      		Footer
   	}
	
}
</script>