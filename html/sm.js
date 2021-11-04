var sm =
[
    [ "State Machine Base Classes", "sm.html#sm_class", [
      [ "The QHsm-Style State Machines", "sm.html#sm_class_qhsm", null ],
      [ "QMsm/QMActive-Style State Machines", "sm.html#sm_class_qmsm", null ]
    ] ],
    [ "State Machine Toolbox", "sm.html#sm_toolbox", null ],
    [ "Working with Statecharts", "sm_statechart.html", [
      [ "Adding a Statechart", "sm_statechart.html#sm_add", null ],
      [ "Resizing a State Machine Diagram", "sm_statechart.html#sm_resize", null ],
      [ "Statechart Property Sheet", "sm_statechart.html#sm_statechart_prop", [
        [ "Use \"me->\"", "sm_statechart.html#sm_statechart-use-me", null ],
        [ "QS_FUN_DICT", "sm_statechart.html#sm_statechart-QS", null ],
        [ "Documentation", "sm_statechart.html#sm_statechart-doc", null ]
      ] ]
    ] ],
    [ "Working with States", "sm_state.html", [
      [ "Adding a State", "sm_state.html#sm_state_add", null ],
      [ "Nesting of States", "sm_state.html#sm_state_nest", null ],
      [ "Moving a State", "sm_state.html#sm_state_move", null ],
      [ "Resizing a State", "sm_state.html#sm_state_resize", null ],
      [ "Deleting a State", "sm_state.html#sm_state_delete", null ],
      [ "State Property Sheet", "sm_state.html#sm_state_prop", [
        [ "State Name", "sm_state.html#sm_state-name", null ],
        [ "Superstate", "sm_state.html#sm_state-super", null ],
        [ "State Documentation", "sm_state.html#sm_state-doc", null ],
        [ "State Entry Action", "sm_state.html#sm_state-entry", null ],
        [ "State Exit Action", "sm_state.html#sm_state-exit", null ]
      ] ]
    ] ],
    [ "Working with Transitions", "sm_tran.html", [
      [ "Regular Transitions", "sm_tran.html#sm_tran_reg", null ],
      [ "Internal Transitions", "sm_tran.html#sm_tran_intern", null ],
      [ "Adding a Transition", "sm_tran.html#sm_tran_add", [
        [ "Adding Internal Transition", "sm_tran.html#sm_tran_add-internal", null ],
        [ "Adding State-to-State Transition", "sm_tran.html#sm_tran_add-state", null ]
      ] ],
      [ "Transition Property Sheet", "sm_tran.html#sm_tran_prop", [
        [ "Transition Trigger", "sm_tran.html#sm_tran-trig", [
          [ "Trigger List", "sm_tran.html#sm_tran_trig-list", null ],
          [ "CATCH_ALL Trigger", "sm_tran.html#sm_tran_CATCH_ALL", null ]
        ] ],
        [ "Transition Target", "sm_tran.html#sm_tran-target", null ],
        [ "Transition Action", "sm_tran.html#sm_tran-act", null ]
      ] ],
      [ "Transition Text Box", "sm_tran.html#sm_tran_text", null ],
      [ "Changing Transition Type", "sm_tran.html#sm_tran_type", null ],
      [ "Routing Transitions", "sm_tran.html#sm_tran_routing", null ],
      [ "What About Guards?", "sm_tran.html#sm_tran_guards", null ]
    ] ],
    [ "Working with Choice Segments", "sm_choice.html", [
      [ "Adding Choice Segment", "sm_choice.html#sm_choice_add", null ],
      [ "Choice Segment Property Sheet", "sm_choice.html#sm_choice_prop", [
        [ "Choice Guard", "sm_choice.html#sm_choice-guard", null ],
        [ "Choice Target", "sm_choice.html#sm_choice-target", null ],
        [ "Choice Action", "sm_choice.html#sm_choice-act", null ]
      ] ],
      [ "Choice Text Box", "sm_choice.html#sm_choice_text", null ],
      [ "The else Guard", "sm_choice.html#sm_choice_else", null ],
      [ "Choice Segments Without else", "sm_choice.html#sm_choice_none", null ],
      [ "Order of Guard Evaluation", "sm_choice.html#sm_choice_order", null ],
      [ "Order of Action Evaluation", "sm_choice.html#sm_choice_act", null ],
      [ "Nested Choice Segments", "sm_choice.html#sm_choice_nest", null ],
      [ "Routing Choice Segments", "sm_choice.html#sm_choice_routing", null ]
    ] ],
    [ "Working with Initial Transitions", "sm_init.html", [
      [ "Adding Initial Transition", "sm_init.html#sm_initial_add", null ],
      [ "Invalid Initial Transitions", "sm_init.html#sm_initial_invalid", null ],
      [ "Initial Transition Property Sheet", "sm_init.html#sm_init_prop", [
        [ "Initial Transition Action", "sm_init.html#bm_init-act", null ]
      ] ],
      [ "Routing Transition Path", "sm_init.html#sm_init-route", null ]
    ] ],
    [ "Working with Transitions to History", "sm_hist.html", [
      [ "Adding History to a Composite State", "sm_hist.html#sm_hist_add", null ],
      [ "Adding History to a Submachine Diagram", "sm_hist.html#sm_hist_subm", null ],
      [ "Invalid History Transitions", "sm_hist.html#sm_hist_invalid", null ],
      [ "Adding Incoming Transition to State History", "sm_hist.html#sm_hist_in", null ],
      [ "Transition to History Property Sheet", "sm_hist.html#sm_hist_prop", [
        [ "Target", "sm_hist.html#sm_hist-target", null ],
        [ "Is Shallow", "sm_hist.html#sm_hist-is_shallow", null ]
      ] ]
    ] ],
    [ "Working with Submachine Diagrams", "sm_subm.html", [
      [ "Adding a Blank Submachine Diagram", "sm_subm.html#sm_subm_add_blank", null ],
      [ "Creating a Submachine Diagram from State", "sm_subm.html#sm_subm_add_state", null ],
      [ "Resizing a Submachine Diagram", "sm_subm.html#sm_subm_resize", null ],
      [ "Deleting a Submachine Diagram", "sm_subm.html#sm_subm_delete", null ],
      [ "Submachine Diagram Property Sheet", "sm_subm.html#sm_subm_prop", [
        [ "Submachine Name", "sm_subm.html#sm_subm-name", null ],
        [ "Submachine Documentation", "sm_subm.html#sm_subm-doc", null ],
        [ "Submachine Entry Action", "sm_subm.html#sm_subm-entry", null ],
        [ "Submachine Exit Action", "sm_subm.html#sm_subm-exit", null ]
      ] ]
    ] ],
    [ "Working with Entry-Point Segments", "sm_epseg.html", [
      [ "Adding Entry-Point Segment", "sm_epseg.html#sm_epseg_add", null ],
      [ "Entry-Point Segment Property Sheet", "sm_epseg.html#sm_epseg_prop", [
        [ "Entry-Point Name", "sm_epseg.html#sm_epseg-name", null ],
        [ "Entry-Point Segment Action", "sm_epseg.html#sm_epseg-act", null ]
      ] ]
    ] ],
    [ "Working with eXit-Points", "sm_xp.html", [
      [ "Adding eXit-Point", "sm_xp.html#sm_xp_add", null ],
      [ "eXit-Point Property Sheet", "sm_xp.html#sm_xp_prop", [
        [ "eXit-Point Name", "sm_xp.html#sm_xp-name", null ]
      ] ]
    ] ],
    [ "Working with Submachine States", "sm_smstate.html", [
      [ "Adding a Submachine State", "sm_smstate.html#sm_smstate_add", null ],
      [ "Moving a Sumachine State", "sm_smstate.html#sm_smstate_move", null ],
      [ "Resizing a Submachine State", "sm_smstate.html#sm_smstate_resize", null ],
      [ "Deleting a Submachine State", "sm_smstate.html#sm_smstate_delete", null ],
      [ "Submachine State Property Sheet", "sm_smstate.html#sm_smstate_prop", [
        [ "Submachine State Name", "sm_smstate.html#sm_smstate-name", null ],
        [ "Submachine", "sm_smstate.html#sm_smstate-subm", null ],
        [ "Documentation", "sm_smstate.html#sm_smstate-doc", null ]
      ] ]
    ] ],
    [ "Working with eXit-Point Segments", "sm_xpseg.html", [
      [ "Adding an eXit-Point Segment", "sm_xpseg.html#sm_xpseg_add", null ],
      [ "eXit-Point Segment with Choices", "sm_xpseg.html#sm_xpseg_choice", null ],
      [ "eXit-Point Property Sheet", "sm_xpseg.html#sm_xpseg_prop", [
        [ "Associated eXit-Point", "sm_xpseg.html#sm_xpseg-xp", null ],
        [ "eXit-Point Segment Target", "sm_xpseg.html#sm_xpseg-target", null ],
        [ "eXit-Point Segment with Choice Segments", "sm_xpseg.html#sm_xpseg-choice", null ],
        [ "eXit-Point Segment Action", "sm_xpseg.html#sm_xpseg-act", null ]
      ] ]
    ] ]
];