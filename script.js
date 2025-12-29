const app = Vue.createApp({
    // Data properties for the Vue app
    data() {
        return {
            // Business name to display in the header
            businessName: "Zena Fusion",

            // Loading state (can be used for future enhancements like showing a spinner)
            isLoading: false,

            // Success message (can be used to display a confirmation message after submission)
            //successMessage: '',

            // List of products available for selection in the form
            products: [
                { name: 'Lemon Juice', picture: 'Colorful logo.png', describtion: 'To lose weight and when you catch a cold', price: 20 },
                { name: 'Apple Juice', picture: 'Colorful logo.png', describtion: 'Best choice when you need a cold refreshment', price: 15 },
                { name: 'Orange Juice', picture: 'Colorful logo.png', describtion: 'Kids favorite drink', price: 12 },
                { name: 'Lemon Juice 2', picture: 'Colorful logo.png', describtion: 'To lose weight and when you catch a cold', price: 20 },
                { name: 'Apple Juice 2', picture: 'Colorful logo.png', describtion: 'Best choice when you need a cold refreshment', price: 15 },
                { name: 'Orange Juice 2', picture: 'Colorful logo.png', describtion: 'Kids favorite drink', price: 12 }
            ],

            // Form data object to bind input fields using v-model
            formData: {
                name: '', // Customer's full name
                phone: '', // Customer's phone number
                email: '', // Customer's email address
                product: '', // Selected product
                quantity: 1, // Quantity of the selected product
                message: '' // Special requests or additional comments
            }
        };
    },

    // Methods for the Vue app
    methods: {
        /**
         * Formats the WhatsApp message URL with the order details.
         * @returns {string} - The WhatsApp message URL.
         */
        formatWhatsAppMessage() {
            // Remove any non-numeric characters from the phone number
            const cleanPhone = this.formData.phone.replace(/\D/g, '');

            // Replace this with your actual WhatsApp number (in international format, without '+' sign)
            const yourWhatsAppNumber = 2250778830726;

            // Start building the WhatsApp message
            let message = `🛍️ *NEW ORDER REQUEST* 🛍️%0A%0A`;

            // Add customer details
            message += `👤 *Customer Details*%0A`;
            message += `• Name: ${this.formData.name}%0A`;
            message += `• WhatsApp: ${cleanPhone}%0A`;
            if (this.formData.email) message += `• Email: ${this.formData.email}%0A`;

            // Add order details
            message += `%0A📦 *Order Details*%0A`;
            message += `• Product: ${this.formData.product}%0A`;
            message += `• Quantity: ${this.formData.quantity}%0A`;
            if (this.formData.message) message += `• Special Requests: ${this.formData.message}%0A`;

            // Add a footer note
            message += `%0A_Generated from website order form_`;

            // Return the complete WhatsApp message URL
            return `https://wa.me/${yourWhatsAppNumber}?text=${message}`;
        },

        /**
         * Handles the form submission and redirects the user to WhatsApp with the order details.
         */
        submitOrder() {
            // Validate required fields
            if (!this.formData.name || !this.formData.phone || !this.formData.product) {
                alert("Please fill out all required fields."); // Alert the user if validation fails
                return;
            }

            // Generate the WhatsApp message URL
            const whatsappUrl = this.formatWhatsAppMessage();

            // Open the WhatsApp URL in a new browser tab
            window.open(whatsappUrl, '_blank');
        }
    }
});

// Mount the Vue app to the #app element in the HTML
app.mount('#app');