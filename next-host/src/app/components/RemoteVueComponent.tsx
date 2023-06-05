import dynamic from "next/dynamic";

const RemoveVueComponent = dynamic(() => import("vue_remote/Button.vue"), { ssr: false })

export default function VueComponent() {
    return (
        <RemoveVueComponent />
    )
}