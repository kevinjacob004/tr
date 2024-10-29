<script>
    document.getElementById('package_id').addEventListener('change', function () {
        var selectedPackageId = this.value;
        var packageImage = document.getElementById('package-image');
        var packageImages = {
            '1': '/static/images/paris_package.jpg',
            '2': '/static/images/tokyo_package.jpg',
            '3': '/static/images/sydney_package.jpg',
            '4': '/static/images/cairo_package.jpg',
            '5': '/static/images/new_york_package.jpg'
        };
        // Update the image source based on the selected package
        packageImage.src = packageImages[selectedPackageId] || '/static/images/default-package.jpg';
    });
</script>
