<template>
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="cell small-12">
                <nav aria-label="You are here:" role="navigation">
                    <ul class="breadcrumbs">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <router-link to="/">Vendors</router-link>
                        </li>
                        <li>
                            <span class="show-for-sr">Current: </span>{{vendor_desc1}}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["vendor_desc1"],
}
</script>

