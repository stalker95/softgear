<template>
	<div class="container-fluid">
		<div class="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item">
					<router-link to="/">
						Dashboaed
					</router-link>	
				</li>
			</ol>
		</div>

		<div class="card mb-3">
			<div class="card-header d-flex">
				<i class="fas fa-chart-area"></i> Categories Management <button @click="showNewCategoryModal" class="btn btn-primary ml-auto"><span class="fa f-plus"></span> Create new</button>
			</div>
			<div class="card-body">
				<table class="table">
					<thead>
					<tr>
						<td>Id</td>
					</tr>
				     </thead>
				    <tbody>
				    	<tr>
				    		<td>1</td>
				    		<td>Shirt</td>
				    		<td>image</td>
				    		<td>
				    			<button class="btn btn-primary btn-sm"><span class="fa fa-edit"></span></button>
				    			<button class="btn btn-danger btn-sm"><span class="fa fa-delete"></span></button>
				    		</td>
				    	</tr>
				    </tbody>
				</table>
			</div>
		</div>

		<b-modal ref="newCategoryModal" hide-footer title="Add new category">
      <div class="d-block text-center">
        <form @submit.prevent="createCategory">

        	 <div class="form-group">
    			<label for="name">Email Name</label>
    			<input type="text" class="form-control" v-model="categoryData.name" placeholder="Enter category" id="name" aria-describedby="emailHelp">
    			<small class="form-text text-muted">We'll never share your email with anyone else.</small>
  			</div>

  			<div class="form-group">
    			<label for="name">Choose image</label>
    			<input type="file" v-on:change="attachImage" class="form-control"  placeholder="Enter category" id="image" aria-describedby="emailHelp">
    			<small class="form-text text-muted">We'll never share your email with anyone else.</small>
  			</div>

  			<hr>
  			<div class="text-right">
  				<button class="btn btn-default" @click="hideNewCategoryModal">Cancel</button>
  				<button class="btn btn-primary" ><span class="fa fa-check"></span> Save</button>
  			</div>	


        </form>
      </div>

    </b-modal>

	</div>
</template>

<script >
	export default {
		name: 'category',
		data() {
			return { categoryData: {
				name: '',
				image: ""
			}
		  } 
		},
		methods: {
			attachImage() {

			},
			createCategory() {

			},
			hideNewCategoryModal() {
               this.$refs.newCategoryModal.hide();
			},
			showNewCategoryModal() {
               this.$refs.newCategoryModal.show();
			}
		}
	}
</script>