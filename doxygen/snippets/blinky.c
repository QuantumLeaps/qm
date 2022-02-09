#include "qpc.h"
#include <stdio.h>
#include <stdlib.h> /* for exit() */

Q_DEFINE_THIS_FILE

enum { BSP_TICKS_PER_SEC = 100 };

void BSP_ledOff(void) {
    printf("LED OFF\n");
}
void BSP_ledOn(void) {
    printf("LED ON\n");
}
void Q_onAssert(char const * const module, int loc) {
    fprintf(stderr, "Assertion failed in %s:%d", module, loc);
    exit(-1);
}
void QF_onStartup(void) {}
void QF_onCleanup(void) {}
void QF_onClockTick(void) {
    QF_TICK_X(0U, (void *)0);  /* perform the QF clock tick processing */
}

enum BlinkySignals {
    TIMEOUT_SIG = Q_USER_SIG,
    MAX_SIG
};

/*============== ask QM to declare the Blinky class ================*/
$declare${AOs::Blinky}

static Blinky l_blinky;
QActive * const AO_Blinky = &l_blinky.super;

static void Blinky_ctor(void) {
    Blinky *me = (Blinky *)AO_Blinky;
    QActive_ctor(&me->super, Q_STATE_CAST(&Blinky_initial));
    QTimeEvt_ctorX(&me->timeEvt, &me->super, TIMEOUT_SIG, 0U);
}

int main() {
    /* statically allocate event queue buffer for the Blinky AO */
    static QEvt const *blinky_queueSto[10];

    QF_init(); /* initialize the framework */

    Blinky_ctor(); /* explicitly call the "constructor" */
    QACTIVE_START(AO_Blinky,
                  1U, /* priority */
                  blinky_queueSto, Q_DIM(blinky_queueSto),
                  (void *)0, 0U, /* no stack */
                  (QEvt *)0);    /* no initialization event */
    return QF_run(); /* run the QF application */
}

/*================ ask QM to define the Blinky class ================*/
$define${AOs::Blinky}

