use core::sync::atomic::{AtomicBool, Ordering};

static OOM_HAPPANED: AtomicBool = AtomicBool::new(false);

pub fn register_oom_handler() {
    get_then_clear_oom_happened();
    std::alloc::set_alloc_error_hook(|layout| {
        OOM_HAPPANED.store(true, Ordering::SeqCst);
        panic!("memory allocation of {} bytes failed\n", layout.size());
    });
}

pub fn get_then_clear_oom_happened() -> bool {
    OOM_HAPPANED.swap(false, Ordering::SeqCst)
}
