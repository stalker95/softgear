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
			<div class="card-header">
				<i class="fas fa-chart-area"></i> Categories Management
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
	</div>
</template>