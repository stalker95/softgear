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
						<td>name</td>
						<td>image</td>
						<td>Actions</td>
					</tr>
				     </thead>
				    <tbody>
				    	<tr v-for="(category, index) in categories" :key="index">
				    		<td>{{ category.id }}</td>
				    		<td>{{ category.name }}</td>
				    		<td><img :src="`${$store.state.serverPath}/app/storage/${category.image}`"></td>
				    		<td>
				    			<button class="btn btn-primary btn-sm"><span class="fa fa-edit"></span></button>
				    			<button class="btn btn-danger btn-sm" @click="deleteCategory(category)"><span class="fa fa-trash"></span></button>
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
    			<div class="invalid-feedback" v-if="errors.name">
    				<p>{{ errors.name[0] }}</p>
    			</div> -
    			<small class="form-text text-muted">We'll never share your email with anyone else.</small>
  			</div>

  			<div class="form-group">
    			<label for="name">Choose image</label>
    			<div v-if="categoryData.image.name">
    				<img src="" ref="newCategoryImageDisplay" style="width:200px;">
    			</div>
    			<input type="file" v-on:change="attachImage" ref="newCategoryImage" class="form-control"  placeholder="Enter category" id="image" aria-describedby="emailHelp">
    			<div class="invalid-feedback" v-if="errors.image">
    				<p>{{ errors.image[0] }}</p>
    			</div> -
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
	import * as categoryService from '../Services/category_service';
	export default {
		name: 'category',
		data() {
			return { 
			    categories: [],
				categoryData: {
				name: '',
				image: ""
			},
			errors: {}
		  } 
		},
		mounted() {
			this.loadCategories();
		},
		methods: {
			loadCategories: async function() {
                try {
                	const response = await categoryService.loadCategories();
                	this.categories = response.data.data;
                	console.log(response);
                } catch(error) {
                	this.flashMessage.error({
    						message: error,
    						time: 5000
    					});

                }
			},
			attachImage() {
               this.categoryData.image = this.$refs.newCategoryImage.files[0];
               let reader = new FileReader();
               reader.addEventListener('load', function() {
                   this.$refs.newCategoryImageDisplay.src = reader.result;
               }.bind(this), false);

               reader.readAsDataURL(this.categoryData.image);

			},
			createCategory: async function() {
               let formData = new FormData();

               formData.append('name', this.categoryData.name);
               formData.append('image', this.categoryData.image);

               try {
               	const response = await categoryService.createCategory(formData);
               	console.log(response);
               	this.categories.unshift(response.data);
               	this.hideNewCategoryModal();
               	this.flashMessage.success({
    				message: 'Category stored successfuly',
    				time: 5000
    			});

    			this.categoryData.name = '';
    			this.categoryData.image = '';

               } catch (error) {
                 switch (error.response.status) {
                 	case 422: 
                 		this.errors = error.response.data.errors;
                 		break;
                 	default: 
                 		this.flashMessage.error({
    						message: 'Category not saved',
    						time: 5000
    					});
                 		break;
                 }
               }
			},

			deleteCategory: async function(category) {
            	if (!window.confirm(`Are you you want to delete a category ${category.name}`)) {
                    return;
            	}
            	try {
                    await categoryService.deleteCategory(category.id);

                    this.flashMessage.success({
    					message: 'category delered',
    					time: 5000
    				});

                    this.categories = this.categories.filter(obj => {
                    	return obj.id != category.id;
                    })

            	} catch (error) {
                    this.flashMessage.error({
    					message: error.response.data.message,
    					time: 5000
    				});
            	}
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