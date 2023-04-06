<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },
    emits: ["submit:register"],
    data() {
        const registerFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Chưa nhập tên đăng nhập.")
                .min(2, "Tên đăng nhập phải có ít nhất 2 ký tự.")
                .max(50, "Tên đăng nhập không được nhiều hơn 50 ký tự."),
            email: yup
                .string()
                .required("Chưa nhập địa chỉ email.")
                .email("E-mail không đúng.")
                .max(50, "email chỉ chứa tối đa 50 ký tự."),
            password: yup
                .string()
                .min(8, "Mật khẩu phải có ít nhất 8 ký tự.")
                .required("Chưa nhập mật khẩu."),
                
            password_confirm: yup
                .string()
                .required("Chưa nhập lại mật khẩu.")
                .test("_match", 'Mật khẩu và nhập lại mật khẩu không trùng khớp.', function(value){
                    return this.parent.password === value
                }),
        });
        return {
            userLocal: {
                name: "",
                email: "",
                password: "",
            },
            registerFormSchema,
        }
    },
    methods: {
        submitRegister () {
            this.$emit("submit:register", this.userLocal);
        }
    }
}
</script>
<template>
    <Form @submit="submitRegister" :validation-schema="registerFormSchema">
        <div class="form-group">
            <label for="name" class="font-weight-bold">
                Tên đăng nhập <span class="text-danger">*</span>
            </label>
            <Field type="text" name="name" class="form-control" v-model="userLocal.name"/>
            <ErrorMessage name="name" class="error-feedback"/>
        </div>
        <div class="form-group">
            <label for="email" class="font-weight-bold">
                Email <span class="text-danger">*</span>
            </label>
            <Field type="text" name="email" class="form-control" v-model="userLocal.email"/>
            <ErrorMessage name="email" class="error-feedback"/>
        </div>
        <div class="form-group">
            <label for="password" class="font-weight-bold">
                Mật khẩu <span class="text-danger">*</span>
            </label>
            <Field type="password" name="password" class="form-control" v-model="userLocal.password"/>
            <ErrorMessage name="password" class="error-feedback"/>
        </div>
        <div class="form-group">
            <label for="password_confirm" class="font-weight-bold">
                Nhập lại mật khẩu <span class="text-danger">*</span>
            </label>
            <Field type="password" name="password_confirm" class="form-control" />
            <ErrorMessage name="password_confirm" class="error-feedback"/>
        </div>
        <hr>
        <div class="form-group">
           <button class="btn btn-primary w-100">Đăng ký</button>
        </div>
    </Form>
</template>
<style scoped>
    @import "@/assets/form.css";
</style>
