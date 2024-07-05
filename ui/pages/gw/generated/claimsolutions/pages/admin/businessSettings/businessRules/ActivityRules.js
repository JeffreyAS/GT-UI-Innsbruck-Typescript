import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ActivityRules {
	activityRulesActivityRules_UpLink = PcfButton('#ActivityRules-ActivityRules_UpLink');
	cCRulesListScreenBulkEdit = PcfButton('#ActivityRules-CCRulesListScreen-BulkEdit');
	cCRulesListScreenCCSelectedRulesAlertBar = PcfButton('#ActivityRules-CCRulesListScreen-CCSelectedRulesAlertBar');
	cCSelectedRulesAlertBarCloseBtn = PcfButton('#ActivityRules-CCRulesListScreen-CCSelectedRulesAlertBar-CloseBtn');
	createRuleToolbarButtonSetAdd = PcfButton('#ActivityRules-CCRulesListScreen-CreateRuleToolbarButtonSet-Add');
	createRuleToolbarButtonSetClone = PcfButton('#ActivityRules-CCRulesListScreen-CreateRuleToolbarButtonSet-Clone');
	deployRulesToolbarButtonSetDeployButton = PcfButton('#ActivityRules-CCRulesListScreen-DeployRulesToolbarButtonSet-DeployButton');
	deployButtonDeployAll = PcfButton('#ActivityRules-CCRulesListScreen-DeployRulesToolbarButtonSet-DeployButton-DeployAll');
	deployButtonDeploySelected = PcfButton('#ActivityRules-CCRulesListScreen-DeployRulesToolbarButtonSet-DeployButton-DeploySelected');
	cCRulesListScreenMoreButton = PcfButton('#ActivityRules-CCRulesListScreen-MoreButton');
	moreButtonRuleListMoreButtonMenuItemSet = PcfComponent('#ActivityRules-CCRulesListScreen-MoreButton-RuleListMoreButtonMenuItemSet');
	ruleListMoreButtonMenuItemSetDisableSelectedRules = PcfButton('#ActivityRules-CCRulesListScreen-MoreButton-RuleListMoreButtonMenuItemSet-DisableSelectedRules');
	ruleListMoreButtonMenuItemSetEnableSelectedRules = PcfButton('#ActivityRules-CCRulesListScreen-MoreButton-RuleListMoreButtonMenuItemSet-EnableSelectedRules');
	ruleListMoreButtonMenuItemSetExportAll = PcfButton('#ActivityRules-CCRulesListScreen-MoreButton-RuleListMoreButtonMenuItemSet-ExportAll');
	ruleListMoreButtonMenuItemSetExportSelected = PcfButton('#ActivityRules-CCRulesListScreen-MoreButton-RuleListMoreButtonMenuItemSet-ExportSelected');
	ruleListMoreButtonMenuItemSetImport = PcfButton('#ActivityRules-CCRulesListScreen-MoreButton-RuleListMoreButtonMenuItemSet-Import');
	cCRulesListScreenPendingImportAlert = PcfButton('#ActivityRules-CCRulesListScreen-PendingImportAlert');
	pendingImportAlertCloseBtn = PcfButton('#ActivityRules-CCRulesListScreen-PendingImportAlert-CloseBtn');
	cCRulesListScreenRollingUpgradeAlert = PcfButton('#ActivityRules-CCRulesListScreen-RollingUpgradeAlert');
	rollingUpgradeAlertCloseBtn = PcfButton('#ActivityRules-CCRulesListScreen-RollingUpgradeAlert-CloseBtn');
	cCRulesListScreenRulesLV = PcfListView('#ActivityRules-CCRulesListScreen-RulesLV');
	rulesLV_tbClear = PcfButton('#ActivityRules-CCRulesListScreen-RulesLV_tb-Clear');
	rulesLV_tbFilter = PcfButton('#ActivityRules-CCRulesListScreen-RulesLV_tb-Filter');
	ruleFilterCriteriaDVAvailability = PcfSelectInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-Availability');
	ruleFilterCriteriaDVJurisdictionFilter = PcfSelectInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-JurisdictionFilter');
	ruleFilterCriteriaDVLossTypeFilter = PcfSelectInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-LossTypeFilter');
	ruleFilterCriteriaDVPolicyTypeFilter = PcfSelectInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-PolicyTypeFilter');
	ruleFilterCriteriaRuleActionInputSetActionTypeFilter = PcfSelectInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-RuleFilterCriteriaRuleActionInputSet-ActionTypeFilter');
	ruleFilterCriteriaRuleActionInputSetActivityPattern = PcfSelectInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-RuleFilterCriteriaRuleActionInputSet-ActivityPattern');
	ruleFilterCriteriaRuleActionInputSetExpression = PcfTextInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-RuleFilterCriteriaRuleActionInputSet-Expression');
	ruleFilterCriteriaRuleActionInputSetHistoryEventType = PcfSelectInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-RuleFilterCriteriaRuleActionInputSet-HistoryEventType');
	ruleFilterCriteriaDVStatus = PcfSelectInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-Status');
	ruleFilterCriteriaDVTextFilter = PcfTextInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-TextFilter');
	ruleFilterCriteriaDVIncidentTypeFilter = PcfSelectInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-IncidentTypeFilter');
	ruleFilterCriteriaDVLossPartyTypeFilter = PcfSelectInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-LossPartyTypeFilter');
	ruleFilterCriteriaDVClaimSegmentFilter = PcfSelectInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-ClaimSegmentFilter');
	ruleFilterCriteriaDVExposureTypeFilter = PcfSelectInput('#ActivityRules-CCRulesListScreen-SearchCriteriaPanelRef-RuleFilterCriteriaDV-ExposureTypeFilter');
	cCRulesListScreenShowHideFilter = PcfButton('#ActivityRules-CCRulesListScreen-ShowHideFilter');
	cCRulesListScreenValidationProcessFailedAlert = PcfButton('#ActivityRules-CCRulesListScreen-ValidationProcessFailedAlert');
	validationProcessFailedAlertCloseBtn = PcfButton('#ActivityRules-CCRulesListScreen-ValidationProcessFailedAlert-CloseBtn');
	cCRulesListScreenValidationProgressAlert = PcfButton('#ActivityRules-CCRulesListScreen-ValidationProgressAlert');
	validationProgressAlertCloseBtn = PcfButton('#ActivityRules-CCRulesListScreen-ValidationProgressAlert-CloseBtn');
	cCRulesListScreenValidationStatusToolbarInput = PcfTextInput('#ActivityRules-CCRulesListScreen-ValidationStatusToolbarInput');
	cCRulesListScreen_msgs = PcfButton('#ActivityRules-CCRulesListScreen-_msgs');
	activityRules_Paging = PcfButton('#ActivityRules-_Paging');
	activityRules__crumb__ = PcfComponent('#ActivityRules-__crumb__');
}
