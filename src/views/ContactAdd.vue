<script>
import ContactForm from '@/components/ContactForm.vue';
import ContactService from '@/services/contact.service.js';
export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            contact: {
                name: "",
                email: "",
                address: "",
                phone: "",
            },
            message: ""
        }
    },
    methods: {
        async createContact(data){
            try {
                await ContactService.create(data);
                this.message = "Đã tạo 1 liên hệ mới!";
            }
            catch(err) {
                console.log(err);
            }
        }
    }
}
</script>

<template >
    <div class="page">
        <h2>Thêm Liên hệ</h2>
        <ContactForm :contact="contact" @submit:contact="createContact"/>
        <p class="text-primary font-weight-bold">{{ message }}</p>
    </div>
</template>

