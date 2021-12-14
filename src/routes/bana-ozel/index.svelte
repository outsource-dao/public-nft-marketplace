<script>
	import Nav from "../_components/Nav.svelte";
	import Footer from "../_components/Footer.svelte";
</script>

<svelte:head>
	<title>Account</title>
</svelte:head>

<Nav />
<section class="pricing-table">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="panel panel-default text-center basic-plan margin-bottom-none">
                    <div class="panel-heading">
                        <h3 class="panel-title bg-light py-2 border-bottom border-grey">Favorites</h3>
                    </div>
                    <div class="panel-body">
                        <div class="plan-price">
                            <div class="price-value">0<span>NFT</span></div>
                        </div>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item"></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4">
                <div class="panel panel-primary text-center advanced-plan margin-bottom-none">
                    <div class="panel-heading">
                        <h3 class="panel-title text-white py-2">Active</h3>
                    </div>
                    <div class="panel-body">
                        <div class="plan-price">
                            <div class="price-value">0<span>NFT</span></div>
                        </div>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item"></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4">
                <div class="panel panel-default text-center basic-plan">
                    <div class="panel-heading">
                        <h3 class="panel-title bg-light py-2 border-bottom border-grey">Passive</h3>
                    </div>
                    <div class="panel-body">
                        <div class="plan-price">      
                            <div class="price-value">0<span>NFT</span></div>
                        </div>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="my-alerts">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
            </div>
            <div class="col-md-9">
                <div class="widget my-profile margin-bottom-none">
                    <div class="widget-header">
                        <h1>My Alerts</h1>
                    </div>
                    <div class="widget-body">
                        <h3>What Are Ad Alerts?</h3>
                        <p>
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies
                            eget, tempor sit amet, ante. Donec eu libero sit
                            amet quam egestas semper. Aenean ultricies mi vitae
                            est. Mauris placerat eleifend leo. Pellentesque
                            habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Vestibulum tortor
                            quam, feugiat vitae, ultricies eget, tempor sit
                            amet, ante. Donec eu libero sit amet quam egestas
                            semper. Aenean ultricies mi vitae est. Mauris
                            placerat eleifend leo.
                        </p>
                        <p>&nbsp;</p>
                        <h3>How Do I Set An Ad Alert?</h3>
                        <p>
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies
                            eget, tempor sit amet, ante. Donec eu libero sit
                            amet quam egestas semper. Aenean ultricies mi vitae
                            est.
                        </p>
                        <p>&nbsp;</p>
                        <form>
                            <div
                                class="form-group row d-flex align-items-center">
                                <label class="col-sm-3 control-label">Email
                                    Address
                                    <span class="required">*</span></label>
                                <div class="col-sm-9">
                                    <input
                                        class="form-control border-form"
                                        type="email"
                                        value=""
                                        placeholder="example@gmail.com" />
                                </div>
                            </div>
                            <div
                                class="form-group row d-flex align-items-center">
                                <label class="col-sm-3 control-label">Frequency
                                    <span class="required">*</span></label>
                                <div class="col-sm-9">
                                    <div class="radio radio-info radio-inline">
                                        <input
                                            type="radio"
                                            checked=""
                                            name="radioInline"
                                            value="option1"
                                            id="inlineRadio1" />
                                        <label for="inlineRadio1">
                                            Once a day
                                        </label>
                                    </div>
                                    <div class="radio radio-info radio-inline">
                                        <input
                                            type="radio"
                                            name="radioInline"
                                            value="option1"
                                            id="inlineRadio2" />
                                        <label for="inlineRadio2">
                                            Once a week
                                        </label>
                                    </div>
                                    <div class="radio radio-info radio-inline">
                                        <input
                                            type="radio"
                                            name="radioInline"
                                            value="option1"
                                            id="inlineRadio3" />
                                        <label for="inlineRadio3">
                                            Once a month
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="form-group row d-flex align-items-center">
                                <label class="col-sm-3 control-label">Pick a
                                    Category
                                    <span class="required">*</span></label>
                                <div class="col-sm-9">
                                    <select class="form-control border-form">
                                        <option selected="">
                                            All Category
                                        </option>
                                        <option>Hand Phone</option>
                                        <option>Motorcycle</option>
                                        <option>Properti</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row text-right">
                                <div class="col-sm-12">
                                    <button
                                        class="btn btn-success btn-sm"
                                        type="submit"><i class="fa fa-save" />
                                        Create Alert</button>
                                    <button
                                        class="btn btn-danger btn-sm"
                                        type="submit"><i class="fa fa-close" />
                                        Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<Footer />

<a
	href=":"
	id="back-to-top"
	data-toggle="tooltip"
	data-placement="left"
	title="Back To Top"
	class="btn btn-default btn-md bg-white"><i class="fa fa-chevron-up" /></a>

